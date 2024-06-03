import { useEffect, useState } from "react";

import Editor from "react-simple-wysiwyg";

const BasicTextEditor = () => {
  const [html, setHtml] = useState("");

  const url = `/compile-template?html=${encodeURIComponent(btoa(html))}`;

  useEffect(() => {
    fetch(url);
  }, [url]);

  return (
    <div className="p-20">
      <Editor
        value={html}
        onChange={(e) => {
          setHtml(e.target.value);
        }}
      />

      <button
        hx-get={url}
        hx-target="#compiled-template-html-content"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-4 px-4 rounded w-half">
        Create Template
      </button>

      <div id="compiled-template-html-content" />
      {/* 
      <button>Download Template</button> */}
    </div>
  );
};

export default BasicTextEditor;
