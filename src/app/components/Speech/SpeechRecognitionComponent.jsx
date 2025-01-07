import { useEffect, useRef, useState } from 'react';
import { IconMicrophone } from '@tabler/icons-react';

function SpeechRecognitionComponent({ setValue }) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join('');
          setValue(transcript);
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech Recognition Error:', event.error);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      } else {
        console.warn('Speech Recognition API is not supported in this browser.');
      }
    }
  }, [setValue]);

  const handleVoiceRecording = () => {
    if (!recognitionRef.current) {
      console.warn('Speech Recognition API is not available');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div>
      <IconMicrophone
        size={22}
        className={`cursor-pointer ${isListening ? 'text-red-500' : 'text-black'}`}
        onClick={handleVoiceRecording}
      />
    </div>
  );
}

export default SpeechRecognitionComponent;
