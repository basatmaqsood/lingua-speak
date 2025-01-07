'use client'
import { FC } from "react";
import TextArea from "./inputs/TextArea";
import SpeechRecognitionComponent from "./Speech/SpeechRecognitionComponent";
import SpeechPlayer from './Speech/SpeechPlayer';
import FileUpload from './inputs/FileUpload';

// Define Props Type
interface InputTextAreaProps {
  value: string;
  setValue: (value: string) => void;
}

// Functional Component with Props
const InputTextArea: FC<InputTextAreaProps> = ({ value, setValue }) => {
  return (
    <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-gray-200 border-gray-300 shadow-gray-400/20 w-full">
      <TextArea 
        id="input" 
        value={value} 
        setValue={setValue} 
        placeholder="Enter Text to Translate"
      />
      <div className="flex flex-row w-full justify-between mb-2">
        <span className="cursor-pointer flex space-x-2 flex-row">
          <SpeechRecognitionComponent setValue={setValue} />
          <SpeechPlayer value={value} />
          <FileUpload setValue={setValue} />                
        </span>
      </div>
    </div>
  );
};

export default InputTextArea;
