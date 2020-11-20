import * as SQLite from 'expo-sqlite';
import { FileSystem } from 'expo-file-system'
import {Asset} from "expo-asset";

const db = SQLite.openDatabase('reactDb.db');
db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE User ("id" INTIGER, "Username" TEXT, "Password" TEXT, PRIMARY KEY("id"))',
  );
});

db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE Adds ("id" INTIGER, "Title" TEXT, "Description" TEXT, , "PhoneNumber" TEXT, "Price" TEXT,"UserId" TEXT, PRIMARY KEY("id"))',
  );
});

export const init = () => {
    db;
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE Adds ("id" INTIGER, "Title" TEXT, "Description" TEXT, , "PhoneNumber" TEXT, "Price" TEXT,"UserId" TEXT, PRIMARY KEY("id"))',
      );
    });
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

  export const deleteAdd = (id) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM Adds WHERE id = ?;',
          [id],
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

  export const insertAdd = (title, description, phoneNumber, price, userId) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Adds ("id" INTIGER, "Title" TEXT, "Description" TEXT, , "PhoneNumber" TEXT, "Price" TEXT,"UserId" TEXT, PRIMARY KEY("id"))')
        tx.executeSql(
          'INSERT INTO Adds (Title, Description, PhoneNumber, Price, UserId) VALUES (?, ?, ?, ?, ?)',
          [title, description, phoneNumber, price, userId],
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

  export const UpdateAdd = (title, description, phoneNumber, price, userId) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE Adds (Title, Description, PhoneNumber, Price, UserId) VALUES (?, ?, ?, ?, ?);',
          [title, description, phoneNumber, price, userId],
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

  export const allAdds = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Adds',[],
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

  export const myAdds = (userId) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Adds Where Username = ?',[userId],
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

