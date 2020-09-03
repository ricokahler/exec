const exec = require('./');

async function main() {
  await exec('echo hello there!');

  try {
    await exec('node ./non-zero.js');
  } catch (e) {
    if (e.message !== 'Non-200 exit code') {
      throw new Error();
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
