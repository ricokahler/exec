const { spawn } = require('child_process');

function exec(command) {
  return new Promise((resolve, reject) => {
    const [cmd, ...rest] = command.split(' ');

    const child = spawn(cmd, rest);

    child.stdout.on('data', (data) => process.stdout.write(data));
    child.stderr.on('data', (data) => process.stderr.write(data));
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error('Non-200 exit code'));
      } else {
        resolve();
      }
    });
  });
}

module.exports = exec;
