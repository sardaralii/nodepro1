const core = require('@actions/core');
const exec = require('@actions/exec');

async function installDependencies() {
  try {
    await exec.exec('npm install');
  } catch (error) {
    core.setFailed(`Failed to install dependencies: ${error}`);
  }
}

async function runTests() {
  try {
    await exec.exec('npm test');
  } catch (error) {
    core.setFailed(`Failed to run tests: ${error}`);
  }
}

module.exports = { installDependencies, runTests };
