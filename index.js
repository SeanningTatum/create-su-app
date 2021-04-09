const fs = require('fs')
const path = require('path')
const yargsParser = require('yargs-parser')
const fsExtra = require('fs-extra')

function validateArgs(args) {
  const {template, _} = yargsParser(args)

  if (!template) {
    console.log("--template is missing from args")
  }

  const name  = _[2];

  return {template, name}
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}

function app() {
  const {template, name} = validateArgs(process.argv)

  const directories = getDirectories('./templates');

  // Check if template exists
  if (!directories.includes(template)) {
    console.error('Template does not exist!')
    process.exit(1)
  }

  const targetDirectory = path.join(process.cwd(), name)
  fs.mkdirSync(targetDirectory)
  const templatePath = path.resolve(process.cwd(), 'templates', template)

  // Copy template into folder
  fsExtra.copy(templatePath, targetDirectory)
}

app()