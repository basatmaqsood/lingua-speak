import React from "react";
import { IconLanguage } from "@tabler/icons-react";
function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) {
  return (
    <span className="cursor-pointer rounded-full space-x-1 px-2 bg-black flex items-center justify-center flex-row ">
      <IconLanguage size={22} color="white" />
      <select
        value={selectedLanguage}
        onChange={(e) => {
          setSelectedLanguage(e.target.value);
        }}
        className="bg-black rounded-full flex flex-row py-1 text-white outline-none"
      >
        <option value={selectedLanguage}>{selectedLanguage}</option>
        {languages.map((language) => {
          return (
            <option key={language} value={language}>
              {language}
            </option>
          );
        })}
      </select>
    </span>
  );
}

export default LanguageSelector;
