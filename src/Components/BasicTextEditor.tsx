import { useEffect, useRef, useState } from "react";

import Editor from "react-simple-wysiwyg";

const BasicTextEditor = () => {
  const [html, setHtml] = useState("");
  const createTemplateBtn = useRef();
  const url = `/compile-template?html=${encodeURIComponent(btoa(html))}`;

  useEffect(() => {
    htmx.process(createTemplateBtn.current);
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
        ref={createTemplateBtn}
        hx-get={url}
        id="create-template-btn"
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
