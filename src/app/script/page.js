'use client';

import React from 'react';
import { Theme } from '@carbon/react';
import { useState } from 'react';
import { useTheme } from '@carbon/react';
import { Button, InlineLoading } from '@carbon/react';
import ScriptClient from './scriptClient';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const intialFunction =
  '//(function fibonacci(n) { if(n <= 2) return 1; return fibonacci(n-1) +fibonacci(n-2); })(6);\n\n' +
  '(function f() { \n\
  var moduleList = [];\n\
  for(var i=0; i<tririgaWS.getModules().length; i++)\n\
    moduleList.push(tririgaWS.getModules()[i].getName());\n\
                  \n\
  return  GSON.toJson(moduleList);\n\
}\n\
)();';

const ScriptEditor = () => {
  const [scriptValue, setScriptValue] = useState(intialFunction);

  const [scriptResponse, setScriptResponse] = useState({ out: '', err: '' });

  function APICall({ children }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [description, setDescription] = useState('Executing...');
    const [ariaLive, setAriaLive] = useState('off');

    const handleSubmit = () => {
      setIsSubmitting(true);
      setAriaLive('assertive');

      // Instead of making a real request, we mock it with a timer
      setTimeout(() => {
        setIsSubmitting(false);
        callAPI();
        setSuccess(true);
        setDescription('Script Executed!');

        // To make submittable again, we reset the state after a bit so the user gets completion feedback
        setTimeout(() => {
          setSuccess(false);
          setDescription('Executing...');
          setAriaLive('off');
        }, 1500);
      }, 2000);
    };
    return children({
      handleSubmit,
      isSubmitting,
      success,
      description,
      ariaLive,
    });
  }

  const callAPI = async () => {
    try {
      ScriptClient.invokeAPI(scriptValue, 'run', null)
        .then(response => response.json())
        .then(jsonData => setScriptResponse(jsonData));
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(value) {
    console.log('handleChange:', value);
    setScriptValue(value);
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
                value={scriptValue}
                theme="dark"
                width="100%"
                height="600px"
                onChange={handleChange}
              />

              <div>
                <br />
              </div>

              <APICall>
                {({
                  handleSubmit,
                  isSubmitting,
                  success,
                  description,
                  ariaLive,
                }) => (
                  <div
                    style={{
                      display: 'flex',
                      width: '300px',
                    }}>
                    {isSubmitting || success ? (
                      <InlineLoading
                        style={{
                          marginLeft: '1rem',
                        }}
                        description={description}
                        status={success ? 'finished' : 'active'}
                        aria-live={ariaLive}
                      />
                    ) : (
                      <Button onClick={handleSubmit}>Execute</Button>
                    )}
                  </div>
                )}
              </APICall>
            </div>
          </td>
        </tr>
      </table>

      <div>
        {' '}
        <br />{' '}
        <p>
          Script Response :
          {Object.keys(scriptResponse).map((k, index) => (
            <div key={index}>
              {k == 'out' && scriptResponse[k] ? (
                <>
                  <p>Output:</p>
                  <p>{scriptResponse[k]}</p>
                </>
              ) : (
                ''
              )}
              {k == 'err' && scriptResponse[k] ? (
                <>
                  <p>Error:</p>
                  <p>{scriptResponse[k]}</p>
                </>
              ) : (
                ''
              )}
              <br />
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ScriptEditor;
