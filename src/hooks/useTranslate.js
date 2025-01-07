'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Custom Hook: useTranslate
 * Translates a given text into the specified language using the Gemini API.
 */
const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState(''); // Stores translated text
  const [error, setError] = useState(null); // Handles error state
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController for cancellation
    const signal = controller.signal;

    const handleTranslate = async () => {
      if (!sourceText.trim()) return; // Prevent empty API calls

      setIsLoading(true); // Start loading
      setError(null); // Reset error state

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
            signal, // Pass the AbortSignal to axios
          }
        );

        const data =
          response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          'Translation failed.';
        setTargetText(data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error translating text:', error.status);
          if(error.status = 429){
            alert('Gemini API key limit has expired. Kindly check after a while.');
          }
          setError('Error');
        }
      } finally {
        setIsLoading(false); // End loading
      }
    };

    const timeoutId = setTimeout(() => {
      handleTranslate();
    }, 500); // Debounced API call

    // Cleanup function to cancel previous requests and timeout
    return () => {
      controller.abort(); // Cancel the ongoing API request
      clearTimeout(timeoutId); // Clear the timeout
    };
  }, [sourceText, selectedLanguage]);

  return { targetText, isLoading, error };
};

export default useTranslate;
