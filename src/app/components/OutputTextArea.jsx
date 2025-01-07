'use client'
import React from "react";
import TextArea from "./inputs/TextArea";
import SpeechPlayer from "./Speech/SpeechPlayer";
import FileUpload from "./inputs/FileUpload";
import LanguageSelector from './inputs/LanguageSelector'

const languages =['Chinese','Japanese','German', 'Spanish', 'French']

function OutputTextArea({selectedLanguage, setSelectedLanguage, value}) {
  return (
    <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-gray-200 border-gray-300 shadow-gray-400/20 w-full">
      <TextArea
        id="input"
        value={value}
        placeholder="Translated text will appear here "
      />
      <div className="flex flex-row w-full justify-between">
        <span className="cursor-pointer flex space-x-2 flex-row items-center mb-2">
          <LanguageSelector languages={languages} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
          <SpeechPlayer value={value} />
        </span>
      </div>
    </div>
  );
}

export default OutputTextArea;
