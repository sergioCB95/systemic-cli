const shelljs = require('shelljs');
const fs = require('fs');

const { deleteDir } = require('../../test/utils');

const testTempDir = './test/temp/';

beforeEach(() => deleteDir(testTempDir));

afterAll(() => deleteDir(testTempDir));

describe('index test', () => {
  it('calls to create component command', () => {
    const path = `${testTempDir}test.js`;
    shelljs.exec(`npm start create component ${path}`);
    expect(fs.existsSync(path)).toBeTruthy();
  });
});
