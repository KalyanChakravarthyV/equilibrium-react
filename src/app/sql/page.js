'use client';
import React from 'react';

import { useState } from 'react';
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
} from '@carbon/react';

import CodeMirror, { oneDarkTheme } from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { Theme } from '@carbon/react';

const SQLEditor = () => {
  const [setValue] = useState({});

  function handleChange(editor, data, value) {
    console.log('data:' + data);
    setValue(value);
  }

  return (
    <Grid>
      <Column lg={2}>
        <OrderedList>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
          <ListItem>Ordered List level 1</ListItem>
        </OrderedList>
      </Column>
      <Column lg={14}>
        <CodeMirror
          value="SELECT * FROM IBS_SPEC WHERE SPEC_ID = 221931;"
          width="100%"
          height="500px"
          onChange={() => handleChange}
          extensions={[sql()]}
          theme={oneDarkTheme}
        />

        <div>
          <br />
        </div>

        <Button> Execute </Button>
      </Column>
    </Grid>
  );
};

export default SQLEditor;
