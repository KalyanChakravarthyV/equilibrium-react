import React from 'react';

import { useState } from 'react';

import { Button } from '@carbon/react';

import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';

const SQLEditor = () => {
  const [setValue] = useState({});

  function handleChange(editor, data, value) {
    console.log('data:' + data);
    setValue(value);
  }

  return (
    <div>
      <CodeMirror
        value="SELECT * FROM IBS_SPEC WHERE SPEC_ID = 221931;"
        width="100%"
        height="500px"
        onChange={() => handleChange}
        extensions={[sql()]}
      />

      <div>
        <br />
      </div>

      <Button> Execute </Button>
    </div>
  );
};

export default SQLEditor;
