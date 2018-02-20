import { Given, When, Then } from 'cucumber';
import path from 'path';
import { exec } from 'child_process';

Given('a running ethereum node', callback => {
  exec(path.join(__dirname, '../../scripts/start_ganache.sh'), (error, stdout, stderr) => {
    callback(error);
  });
});

Given('a running IPFS server', callback => {
  callback(null, 'pending');
});

Given('a running batcher', callback => {
  callback(null, 'pending');
});

Given('a record of the deposition', callback => {
  callback(null, 'pending');
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
