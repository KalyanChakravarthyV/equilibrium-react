'use client';

const DataExportClient = {
  invokeAPI: async function(sql, action, callBackFn) {
    return fetch(
      process.env.TRIRIGA_ENV.includes('http')
        ? process.env.TRIRIGA_ENV +
            '/html/en/default/rest/Equilibrium/api/dataExport'
        : process.env.TRIRIGA_ENV + '/api/dataExport',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.getRequest(sql, action),
      }
    );
  },

  getRequest: function(sql, action) {
    let query = {
      action: `${action}`,
      body: `${sql}`,
    };
    return JSON.stringify(query);
  },
};

export default DataExportClient;
