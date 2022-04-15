import './App.css';
import { useEffect, useRef, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
function App() {
  const options = {
    selectOnLineNumbers: true,
    readOnly: false
  };
  const [code, setCode] = useState('test')
  const editorDidMount = (editor, monaco) => {
    setCode('console.log("hello react-monaco-editor")')
    console.log('editorDidMount', editor);
    editor.focus();
  }
  const onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  }
  return (
    <div className="App">
      <MonacoEditor
        width="800"
        height="800"
        language="javascript"
        theme="vs-light"
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
}

export default App;
