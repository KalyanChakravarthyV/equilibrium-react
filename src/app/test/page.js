'use client';

import { useState, useEffect } from 'react';
import FinderClient from '../finder/finderClient';

import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  TableSelectRow,
} from '@carbon/react';

function CurrentTime() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      process.env.TRIRIGA_ENV.includes('http')
        ? process.env.TRIRIGA_ENV +
            '/html/en/default/rest/Equilibrium/api/currentTime'
        : process.env.TRIRIGA_ENV + '/api/currentTime',

      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div style={{ marginLeft: 2 + 'em' }}>
      {Object.keys(data).map((d, index) => (
        <div key={index}>
          <h4>{data[d].name}</h4>
          <p>{data[d].locale_name}</p>
          <p>{data[d].time}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
export default CurrentTime;
