import React from 'react';
import { Theme } from '@carbon/react';
import { useState } from 'react';
import { useTheme } from '@carbon/react';
import { Button } from '@carbon/react';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { basicSetup } from 'codemirror';

const ScriptEditor = () => {
  const [setValue] = useState({});

  function handleChange(value, viewUpdate) {
    console.log('data:' + value);
  }
  const { theme } = useTheme();

  return (
    <div>
      <CodeMirror
        value="(function(){
          console.log('Hello World!)';})();"
        width="100%"
        height="500px"
        onChange={handleChange}
        extensions={[basicSetup, javascript()]}
      />

      <div>
        <br />
      </div>

      <Button> Execute </Button>
    </div>
  );
};

export default ScriptEditor;
