import { useEffect, useState } from "react";

import basic from "../templates/basic";

import Editor from "react-simple-wysiwyg";

const BasicTextEditor = () => {
  const [html, setHtml] = useState("");
  const [c, setC] = useState(null);

  useEffect(() => {
    setC(null);
  }, [html]);

  return (
    <div className="p-20">
      <Editor
        value={html}
        onChange={(e) => {
          setHtml(e.target.value);
        }}
      />

      <button
        onClick={() => {
          const content = basic.replace("{{ENTER_HERE}}", html);
          setC(content);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-4 px-4 rounded w-half">
        Create Template
      </button>

      {c && (
        <>
          <div className="w-full">
            <textarea
              className="w-full"
              style={{ height: "400px" }}
              id="compile-template"
              name="compile-template-text">
              {c}
            </textarea>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-4 px-4 rounded w-half"
            id="download-button"
            onClick={() => {
              const blob = new Blob([c], { type: "text/html" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "template.html";
              document.body.appendChild(a);
              a.click();
              a.remove();
              URL.revokeObjectURL(url);
            }}>
            Download Template
          </button>
        </>
      )}
    </div>
  );
};

export default BasicTextEditor;
