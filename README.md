# @ricokahler/exec

Whenever I write a build script, I always write a little helper that wraps spawn so instead I made a small package namespaced by my name.

## Usage

```js
const exec = require('@ricokahler/exec');

async function main() {
  // only runs the command, doesn't return anything
  await exec('echo hello world!'):
}
```

stdout is redirected to `process.stdout` and stderr to `process.stderr`

that's it!
