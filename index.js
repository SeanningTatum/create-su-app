#!/usr/bin/env node
'use strict';

const fsExtra = require('fs-extra')
const {
  validateArgs, 
  printSuccessMessage, 
  getTemplateContent, 
  installProject, 
  checkIfNodeIsValid,
  initializeGit,
} = require('./utils')

async function app() {

  checkIfNodeIsValid()

  try {
    const {templateName, name, targetDirectory, verbose} = validateArgs(process.argv)

    const template = getTemplateContent(templateName)

    await fsExtra.copy(template, targetDirectory)

    await initializeGit(targetDirectory)

    await installProject(targetDirectory, verbose)

    printSuccessMessage(name)
  } catch (error) {
    console.error(`An error has occurred`)
    console.error(error)
  }

}



app()