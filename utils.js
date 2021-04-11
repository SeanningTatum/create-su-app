const path = require('path')
const yargsParser = require('yargs-parser')
const colors = require('kleur');
const execa = require('execa');
const { execSync } = require('child_process');

function validateArgs(args) {
  const {template, target, _} = yargsParser(args)

  if (!template) {
    console.log("--template is missing from args")
  }

  const targetDirectoryRelative = target || _[2];
  const targetDirectory = path.resolve(process.cwd(), targetDirectoryRelative);

  const name  = _[2];

  return {templateName: template, name, targetDirectory}
}

function formatCommand(command, description) {
  return '  ' + command.padEnd(17) + colors.dim(description);
}

function printSuccessMessage(name) {
  // TODO:- Change success message depending on the project!

  console.log(``);
  console.log(colors.bold(colors.underline(`Quickstart:`)));
  console.log(``);
  console.log(`  cd ${name}`)
  console.log(`  yarn start`);
  console.log(``);
  console.log(colors.bold(colors.underline(`All Commands:`)));
  console.log(``);
  console.log(formatCommand(`yarn start`, 'Start your development server.'));
  console.log(formatCommand(`yarn run build`, 'Build your website for production.'));
  console.log(formatCommand(`yarn test`, 'Run your tests.'));
  console.log(``);
}

function checkIfNodeIsValid() {
  const currentVersion = process.versions.node;
  const requiredMajorVersion = parseInt(currentVersion.split('.')[0], 10);
  const minimumMajorVersion = 10;

  if (requiredMajorVersion < minimumMajorVersion) {
    console.error(`Node.js v${currentVersion} is out of date and unsupported!`);
    console.error(`Please use Node.js v${minimumMajorVersion} or higher.`);
    process.exit(1);
  }
  
}

function getTemplateContent(template) {
  const isLocalTemplate = template.startsWith('.'); // must start with a `.` to be considered local
  const templatePath = isLocalTemplate
    ? path.resolve(process.cwd(), template) // handle local template
    : path.join(__dirname, 'templates', template); 

  console.log(templatePath)

  return templatePath
}

async function initializeGit(targetDirectory) {
  console.log(`\n  - Initializing git repo.\n`);
  
  try {
    await execa('git', ['init'], {cwd: targetDirectory});
    await execa('git', ['add', '-A'], {cwd: targetDirectory});
    await execa('git', ['commit', '-m', 'initial commit'], {
      cwd: targetDirectory,
    });
    console.log(`  - ${colors.green('Success!')}`);
  } catch (err) {
    console.log(`  - ${colors.yellow('Could not complete git repository initialization.')}`);
  }
  return
}

async function installProject(targetDirectory) {
  console.log(`\n  - Installing packages with yarn. This might take a couple of minutes\n`);

  try {
    await execa('yarn', ['install'], {cwd: targetDirectory, stdio: 'inherit'})
  } catch (error) {
    console.log(`  - ${colors.yellow('Could not install with yarn.')}`);
  }

  return
}

module.exports = {
  validateArgs,
  printSuccessMessage,
  checkIfNodeIsValid,
  getTemplateContent,
  initializeGit,
  installProject,
}