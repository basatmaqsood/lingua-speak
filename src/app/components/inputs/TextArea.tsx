import React from 'react';

interface TextAreaProps {
  value: string;
  setValue: (value: string) => void; 
  placeholder?: string; 
  id?: string; 
}

function TextArea({ value, setValue, placeholder, id }: TextAreaProps) {
  return (
    <textarea
      rows={5}
      id={id}
      className="bg-transparent border-none focus:outline-none py-2.5 px-4 block w-full rounded-lg resize-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)} 
    />
  );
}

export default TextArea;
