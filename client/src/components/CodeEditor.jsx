import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';

function CodeEditor() {
  const [code, setCode] = useState('<!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>');
  const [output, setOutput] = useState('');

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div>
      <h2 className="h3 font-weight-bold mb-3">Try It Yourself</h2>
      <AceEditor
        mode="html"
        theme="monokai"
        value={code}
        onChange={(newCode) => setCode(newCode)}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        className="w-100 mb-3"
        style={{ height: '300px' }}
      />
      <button
        onClick={runCode}
        className="btn btn-success mb-3"
      >
        Run Code
      </button>
      <div className="border p-3 bg-white">
        <h3 className="h5 font-weight-semibold">Output:</h3>
        <iframe
          title="output"
          srcDoc={output}
          className="w-100"
          style={{ height: '300px' }}
        />
      </div>
    </div>
  );
}

export default CodeEditor;