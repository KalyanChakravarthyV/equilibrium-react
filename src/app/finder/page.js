'use client';
import React from 'react';

import { useState, useEffect } from 'react';

import { saveAs } from 'file-saver';

import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  DataTableSkeleton,
} from '@carbon/react';

import FinderClient from './finderClient';

/*
let rows = [
  {
    id: 'a',
    name: 'ClassLoader',
    type: 'Directory',
    size: '-',
    lastModified: 'AA BB IST',
  },
  {
    id: 'b',
    name: 'readme.txt',
    type: 'File',
    size: '-',
    lastModified: 'AA BB IST',
  },
  {
    id: 'c',
    name: 'ObjectMigration',
    type: 'File',
    size: '-',
    lastModified: 'AA BB IST',
  },
];
*/

// const init = rData => {
//   rows = rData;
// };

// Get the data for the initial directory

const Finder = () => {
  const saveFile = url => {
    saveAs(url);
  };

  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState([]);

  const [isLoading, setLoading] = useState(true);

  // FinderClient.invokeAPI('-root-', 'list', setRowData);

  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'type',
      header: 'Type',
    },
    ,
    {
      key: 'size',
      header: 'Size',
    },
    ,
    {
      key: 'lastModified',
      header: 'Last Modified',
    },
  ];

  let timer;

  useEffect(() => {
    console.log('TRIRIGA_ENV', process.env.TRIRIGA_ENV);

    FinderClient.invokeAPI('-root', 'list', null)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);

        let localRowData = [];
        {
          data.directories.map((f, i) =>
            localRowData.push({
              id: f.id,
              name: f.name,
              type: 'Directory',
              size: '-',
              lastModified: f.lastModified,
            })
          );
        }

        {
          data.files.map((f, i) =>
            localRowData.push({
              id: f.id,
              name: f.name,
              type: 'File',
              size: f.size,
              lastModified: f.lastModified,
            })
          );
        }

        setRowData(localRowData);
      });
  }, []);

  const handleOnClick = (e, selectedRow) => {
    clearTimeout(timer);

    if (event.detail === 1) {
      timer = setTimeout(() => {
        handleSingleClick(e, selectedRow);
      }, 200);
    } else if (event.detail === 2) {
      handleDoubleClick(e, selectedRow);
    }
  };

  const handleSingleClick = (e, selectedRow) => {
    console.log('SC->', selectedRow);

    let type = selectedRow.cells[1].value;

    switch (type) {
      case 'File':
        console.log('Selected File:', selectedRow.cells[0].value);
        // saveAs()
        FinderClient.invokeAPI(selectedRow.id, 'list', null)
          .then(response => response.blob())
          .then(data => window.open(URL.createObjectURL(data)));

        break;
      case 'Directory':
        console.log('Selected Dir:', selectedRow.cells[0].value);

        setLoading(true);

        FinderClient.invokeAPI(selectedRow.id, 'list', null)
          .then(res => res.json())
          .then(data => {
            setData(data);
            setLoading(false);

            let localRowData = [];
            {
              data.directories.map((f, i) =>
                localRowData.push({
                  id: f.id,
                  name: f.name,
                  type: 'Directory',
                  size: '-',
                  lastModified: f.lastModified,
                })
              );
            }

            {
              data.files.map((f, i) =>
                localRowData.push({
                  id: f.id,
                  name: f.name,
                  type: 'File',
                  size: f.size,
                  lastModified: f.lastModified,
                })
              );
            }

            setRowData(localRowData);
          });
    }
  };

  const handleDoubleClick = (e, selectedRow) => {
    let type = selectedRow.cells[1].value;

    switch (type) {
      case 'File':
        console.log('Selected File:', selectedRow.cells[0].value);

        FinderClient.invokeAPI(selectedRow.id, 'download', null)
          .then(response => response.blob())
          .then(blob => saveAs(blob, selectedRow.cells[0].value));
        break;
      case 'Directory':
        console.log('Selected Dir:', selectedRow.cells[0].value);
        FinderClient.invokeAPI(selectedRow.id, 'download', null)
          .then(response => response.blob())
          .then(blob => saveAs(blob, selectedRow.cells[0].value + '.zip'));
    }

    console.log('DC->', selectedRow);
  };

  if (isLoading) return <DataTableSkeleton />;

  if (!isLoading && data)
    return (
      <div>
        {' '}
        <DataTable rows={rowData} headers={headers} isSortable>
          {({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getTableProps,
            getTableContainerProps,
          }) => (
            <TableContainer
              title="File System (userfiles)"
              description="Click to navigate, double click to download">
              <Table>
                <TableHead>
                  <TableRow>
                    {headers.map((header, i) => (
                      <TableHeader key={i}>{header.header}</TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow
                      key={i}
                      onClick={evt => handleOnClick(evt, row)}
                      style={{ cursor: 'pointer' }}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>
    );
};

export default Finder;
