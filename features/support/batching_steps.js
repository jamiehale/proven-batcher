import { Given, When, Then } from 'cucumber';
import path from 'path';
import { exec } from 'child_process';
import { MongoClient } from 'mongodb';

Given('a running ethereum node', callback => {
  exec(path.join(__dirname, '../../scripts/start_ganache.sh'), (error, stdout, stderr) => {
    callback(error);
  });
});

Given('a running IPFS server', callback => {
  exec(path.join(__dirname, '../../scripts/start_ipfs.sh'), (error, stdout, stderr) => {
    callback(error);
  });
});

Given('a running database', callback => {
  exec(path.join(__dirname, '../../scripts/start_mongo.sh'), (error, stdout, stderr) => {
    if (error) {
      callback(error);
    } else {
      setTimeout(callback, 1000);
    }
  });
});  

Given('a record of the deposition', callback => {
  MongoClient.connect('mongodb://127.0.0.1:27017', (error, db) => {
    if (error) {
      callback(error);
    } else {
      db.db('proven').collection('depositions').insertOne({
        assetHash: 'abcdefg1234567'
      }, (error, result) => {
        if (error) {
          db.close();
          callback(error);
        } else {
          db.close();
          callback(null);
        }
      });
    }
  });
});

Given('a running batcher', callback => {
  exec(path.join(__dirname, '../../index.js'), (error, stdout, stderr) => {
    callback(error);
  });
});  

When('I submit the deposition to the batcher', callback => {
  callback(null, 'pending');
});

Then('the record of the deposition will be updated', callback => {
  callback(null, 'pending');
});

Then('the batch will have been recorded in IPFS', callback => {
  callback(null, 'pending');
});

Then('the batch will have been published to Ethereum', callback => {
  callback(null, 'pending');
});
