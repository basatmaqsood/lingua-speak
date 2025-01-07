'use client'
import { useState } from "react";
import InputTextArea from "./InputTextArea";
import OutputTextArea from './OutputTextArea';
import useTranslate from "@/hooks/useTranslate";

function TextAreaContainer() {
    const [inputValue, setInputValue] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const { targetText, isLoading, error } = useTranslate(inputValue,selectedLanguage);

    return (
        <div className="mt-7 sm:mt-12 mx-auto max-w-6xl relative">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <InputTextArea value={inputValue} setValue={setInputValue} />
                <OutputTextArea selectedLanguage ={selectedLanguage} setSelectedLanguage ={setSelectedLanguage} value={targetText} />
            </div>
        </div>

    );
}

export default TextAreaContainer;
