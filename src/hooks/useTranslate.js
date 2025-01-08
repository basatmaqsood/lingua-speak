'use client';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

/**
 * Custom Hook: useTranslate
 * Translates a given text into the specified language using the Gemini API.
 */
const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState(''); // Stores translated text
  const [error, setError] = useState(null); // Handles error state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [retryCount, setRetryCount] = useState(0); // Retry counter
  const cache = useRef(new Map()); // Cache for translations

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController for cancellation
    const signal = controller.signal;

    const handleTranslate = async () => {
      if (!sourceText.trim()) return; // Prevent empty API calls

      const cacheKey = `${sourceText}_${selectedLanguage}`;
      if (cache.current.has(cacheKey)) {
        setTargetText(cache.current.get(cacheKey)); // Return cached result
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
          {
            contents: [
              {
                parts: [
                  {
                    text: `Translate the following sentence into ${selectedLanguage}: "${sourceText}". Only return the translated text.`,
                  },
                ],
              },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            params: {
              key: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
            },
            signal,
          }
        );

        const data =
          response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          'Translation failed.';
        setTargetText(data);
        cache.current.set(cacheKey, data); // Store in cache
        setRetryCount(0); // Reset retry count on success
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else if (error.response?.status === 429) {
          console.warn('Rate limit exceeded. Retrying...');
          setRetryCount((prev) => prev + 1);
          if (retryCount < 3) {
            setTimeout(handleTranslate, 2000 * (retryCount + 1)); // Exponential backoff
          } else {
            setError('Too many requests. Please try again later.');
          }
        } else {
          console.error('Error translating text:', error.message);
          setError('Translation error. Please try again.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Debounced API Call
    const timeoutId = setTimeout(() => {
      handleTranslate();
    }, 1000); // Increased debounce delay

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [sourceText, selectedLanguage, retryCount]);

  return { targetText, isLoading, error };
};

export default useTranslate;
