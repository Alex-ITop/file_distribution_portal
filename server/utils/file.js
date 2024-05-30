import jsonfile from 'jsonfile';

export const getData = (fileName) =>
  new Promise(function (resolve, reject) {
    jsonfile.readFile(fileName, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
