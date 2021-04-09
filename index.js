#!/usr/bin/env node
'use strict';

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
  try {
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

    console.error(`An error has occurred`)

    console.log(``);
    console.log(`Quickstart: `);
    console.log(``);
    console.log(`  cd ${targetDirectory}`);
    console.log(`  yarn install && yarn start`);
    console.log(``);
  } catch (error) {
    console.error(`An error has occurred`)
    console.error(error)
  }

}

const currentVersion = process.versions.node;
const requiredMajorVersion = parseInt(currentVersion.split('.')[0], 10);
const minimumMajorVersion = 10;

if (requiredMajorVersion < minimumMajorVersion) {
  console.error(`Node.js v${currentVersion} is out of date and unsupported!`);
  console.error(`Please use Node.js v${minimumMajorVersion} or higher.`);
  process.exit(1);
}


app()