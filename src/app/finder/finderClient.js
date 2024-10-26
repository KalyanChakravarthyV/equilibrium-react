'use client';

require('dotenv').config();

const FinderClient = {
  invokeAPI: async function(path, finderAction, callBackFn) {
    return fetch(
      process.env.TRIRIGA_ENV.includes('http')
        ? process.env.TRIRIGA_ENV +
            '/html/en/default/rest/Equilibrium/api/finder'
        : process.env.TRIRIGA_ENV + '/api/finder',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //Authorization: 'Basic c3lzdGVtOjFQYXNzd29yZCo=',
        },
        body: this.getRequest(path, finderAction),
      }
    );

    /*
    
    //.then(async response => {
    // if (response.ok) {
          let responseJson =  await response.json();

          let rowData = [];

          // responseJson.then( 
          responseJson['directories'].forEach(v => {
            rowData.push({
              id: v.id+'',
              name: v.name,
              type: 'Directory',
              size: '-',
              lastModified: v.lastModified,
            });
          });

          responseJson.files.forEach(v => {
            rowData.push({
              id: v.id+'',
              name: v.name,
              type: 'File',
              size: v.size,
              lastModified: v.lastModified,
            });
          });

          callBackFn(rowData);

          console.log('ResponseJSON:', responseJson);
        // } 
        
        /*
        else {
          let msg =
            `Error with Finder API: '${response.status}:${
              response.statusText
            }'` +
            path +
            ':' +
            finderAction;
          console.error(msg);
          //   searchData.errorOccurred = true;
          //   this.$posthog.capture(msg);
        //}s
      }
        */

    // .then(response => {
    //   console.log('Response:', response);
    //   // searchData.skltOn = false;
    // })
    /*
      .catch(err => {
        console.log(err);
        // searchData.errorOccurred = true;
        // searchData.skltOn = false;
      });
      */
  },

  getRequest: function(path, finderAction) {
    let query = {
      action: `${finderAction}`,
      body: `path:${path}`,
    };
    return JSON.stringify(query);
  },
};

export default FinderClient;
