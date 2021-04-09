#!/usr/bin/env node
'use strict';

const fs = require('fs')
const path = require('path')
const yargsParser = require('yargs-parser')
const fsExtra = require('fs-extra')

function validateArgs(args) {
  const {template, target, _} = yargsParser(args)

  if (!template) {
    console.log("--template is missing from args")
  }

  const targetDirectoryRelative = target || _[2];
  const targetDirectory = path.resolve(process.cwd(), targetDirectoryRelative);

  const name  = _[2];

  return {template, name, targetDirectory}
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}

function app() {
  try {
    const {template, name, targetDirectory} = validateArgs(process.argv)

    const isLocalTemplate = template.startsWith('.'); // must start with a `.` to be considered local
    const installedTemplate = isLocalTemplate
      ? path.resolve(process.cwd(), template) // handle local template
      : path.join('templates', name); 

    console.log(installedTemplate)
    
    // Copy template into folder
    fsExtra.copy(installedTemplate, targetDirectory)

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