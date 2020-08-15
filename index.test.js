const exec = require('./');

it('resolves when it finishes executing a command', async () => {
  await exec('echo hello there!');
});

it('rejects when it the command exits with a non-zero exit code', async () => {
  try {
    await exec('node ./non-zero.js');
  } catch (e) {
    expect(e).toMatchInlineSnapshot(`[Error: Non-200 exit code]`);
  }
});
