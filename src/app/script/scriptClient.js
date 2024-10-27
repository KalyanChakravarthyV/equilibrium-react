'use client';

const ScriptClient = {
  invokeAPI: async function(script, action, callBackFn) {
    return fetch(
      process.env.TRIRIGA_ENV.includes('http')
        ? process.env.TRIRIGA_ENV +
            '/html/en/default/rest/Equilibrium/api/runScript'
        : process.env.TRIRIGA_ENV + '/api/runScript',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.getRequest(script, action),
      }
    );
  },

  getRequest: function(script, action) {
    let query = {
      action: `${action}`,
      body: `${script}`,
    };
    return JSON.stringify(query);
  },
};

export default ScriptClient;
