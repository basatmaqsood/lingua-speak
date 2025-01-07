import React from "react";
import { IconPaperclip } from "@tabler/icons-react";
import rtfToText from "@/utils/rtfToText";

function FileUpload({ setValue }) {
  function handleFileUpload(e) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setValue(reader.result);
      };
      reader.readAsText(file);
    }
  }
  return (
    <label htmlFor="file-upload" className="cursor-pointer">
      <IconPaperclip />
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept=".txt"
        onChange={(e) => handleFileUpload(e)}
      />
    </label>
  );
}

export default FileUpload;
