'use client';

import React from 'react';
import { Theme } from '@carbon/react';
import { useState } from 'react';
import { useTheme } from '@carbon/react';
import { Button } from '@carbon/react';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { saveAs } from 'file-saver';

// import { basicSetup } from 'codemirror';

const ScriptEditor = () => {
  const [value, setValue] = useState({});

  function handleChange(value, viewUpdate) {
    console.log('data:' + value);
  }
  const { theme } = useTheme();

  return (
    <div>
      <br />
      <table>
        <tr>
          <td width="60px" />
          <td width="100%">
            <div>
              <CodeMirror
                value="(function() {
          log.info('Hello World!)';
          })();"
                theme="dark"
                width="100%"
                height="600px"
                onChange={() => {}}
              />

              <div>
                <br />
              </div>

              <Button> Execute </Button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ScriptEditor;
