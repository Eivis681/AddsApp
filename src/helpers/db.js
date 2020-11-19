import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase(
    {
        name:'reactDb',
        location: 'default',
        createFromLocation:'~reactDb.db',
    },
    () => {
        console.log('OK veikia');
      },
      (error) => {
        console.log('Error:' + error);
      },
);

export const init = () => {
    db;
  };

  export const userLogin = (username, password) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT Username, Password FROM User WHERE Username = ? And Password = ?;',
          [username, password],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          },
        );
      });
    });
    return promise;
  };

  export const createUser = (username, password) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO User (Username, Password) VALUES (?, ?);',
          [username, password],
          (_, result) => {
            resolve(result);
            console.log('Ok');
          },
          (_, err) => {
            reject(err);
            console.log('NO');
          },
        );
      });
    });
    return promise;
  };