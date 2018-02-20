import { After } from 'cucumber';
import path from 'path';
import { exec } from 'child_process';

After(() => {
  exec(path.join(__dirname, '../../scripts/stop_ganache.sh'), (error, stdout, stderr) => {
  });
});
