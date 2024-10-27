'use client';
import React from 'react';

import { useState } from 'react';
import { Db2Database, Folder } from '@carbon/icons-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  OrderedList,
  ListItem,
  TreeView,
  TreeNode,
  InlineLoading,
} from '@carbon/react';

import CodeMirror, { oneDark } from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { IconButton } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import DataExportClient from './dataExportClient';

const initialDoc =
  'q1:SELECT SPEC_TEMPLATE_ID,NAME FROM IBS_SPEC_TYPE;\n' +
  'q2:SELECT SPEC_TEMPLATE_ID, COUNT(SPEC_ID) AS BO_COUNT FROM IBS_SPEC GROUP BY SPEC_TEMPLATE_ID;';

const showTreeGrid = false;
let nodes = [
  {
    id: '1',
    value: '1',
    label: 'Untitled 01',
    renderIcon: Db2Database,
  },
  {
    id: '2',
    value: '2',
    label: 'Untitled 02',
    renderIcon: Db2Database,
  },
];
function renderTree({ nodes, expanded, withIcons = false }) {
  nodes = []; //TODO Hiding for pre-release
  if (!nodes) {
    return;
  }
  return nodes.map(({ children, renderIcon, isExpanded, ...nodeProps }) => (
    <TreeNode
      key={nodeProps.id}
      renderIcon={withIcons ? renderIcon : null}
      isExpanded={expanded ?? isExpanded}
      {...nodeProps}>
      {renderTree({
        nodes: children,
        expanded,
        withIcons,
      })}
    </TreeNode>
  ));
}

const SQLEditor = () => {
  const [sqlQuery, setSQLQueryValue] = useState(initialDoc);

  function DataExportCall({ children }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [description, setDescription] = useState('Exporting...');
    const [ariaLive, setAriaLive] = useState('off');

    const handleSubmit = () => {
      setIsSubmitting(true);
      setAriaLive('assertive');

      // Instead of making a real request, we mock it with a timer
      setTimeout(() => {
        setIsSubmitting(false);
        callAPI();
        setSuccess(true);
        setDescription('Data Exported!');

        // To make submittable again, we reset the state after a bit so the user gets completion feedback
        setTimeout(() => {
          setSuccess(false);
          setDescription('Exporting...');
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
      DataExportClient.invokeAPI(sqlQuery, 'export', null)
        .then(response => response.blob())
        .then(blob => saveAs(blob, 'DataExport.xlsx'));
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(value) {
    console.log('handleChange:', value);
    setSQLQueryValue(value);
  }

  return showTreeGrid ? (
    <Grid>
      <Column lg={2}>
        <div>
          <TreeView label="Queries:" size="sm">
            {renderTree({
              nodes,
              withIcons: true,
            })}
          </TreeView>
        </div>
        <div align="right">
          <br />
          <IconButton label="Add" size="sm">
            <Add />
          </IconButton>
        </div>
      </Column>

      <Column lg={14}>
        <div>
          <CodeMirror
            value={sqlQuery}
            width="100%"
            height="600px"
            onChange={handleChange}
            extensions={[sql()]}
            theme={oneDark}
          />
          <div>
            <br />
          </div>
          <DataExportCall>
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
                  <Button onClick={handleSubmit}>Export</Button>
                )}
              </div>
            )}
          </DataExportCall>
        </div>
        <br />
      </Column>
    </Grid>
  ) : (
    <>
      <div>
        <CodeMirror
          value={sqlQuery}
          width="100%"
          height="600px"
          onChange={handleChange}
          extensions={[sql()]}
          theme={oneDark}
        />
        <div>
          <br />
        </div>
        <DataExportCall>
          {({ handleSubmit, isSubmitting, success, description, ariaLive }) => (
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
                <Button onClick={handleSubmit}>Export</Button>
              )}
            </div>
          )}
        </DataExportCall>
      </div>
    </>
  );
};

export default SQLEditor;
