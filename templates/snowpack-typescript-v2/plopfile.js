module.exports = (plop) => {
  plop.setGenerator('base', {
    description: 'Create a base component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your base component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/base/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/base/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/base/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'generators/base/base.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators/base/base.stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/base/base.test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('module', {
    description: 'Create a module component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/module/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/module/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/module/module.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators/module/module.stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/module/module.test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('smart module', {
    description: 'Create a smart module component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your smart module component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/module/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/smart-module/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.types.d.ts',
        templateFile: 'generators/smart-module/module.types.d.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/smart-module/module.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
        templateFile: 'generators/smart-module/module.container.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators/smart-module/module.stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/smart-module/module.test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('layout', {
    description: 'Create a layout component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/layout/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/layout/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/layout/layout.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators/layout/layout.stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/layout/layout.test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('route', {
    description: 'Create a route component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your route name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/routes/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/route/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/{{pascalCase name}}/{{pascalCase name}}.types.d.ts',
        templateFile: 'generators/route/route.types.d.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/route/route.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/routes/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
        templateFile: 'generators/route/route.container.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('svg', {
    description: 'Create svg component and storybook entry',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your svg name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/svg/{{pascalCase name}}.tsx',
        templateFile: 'generators/svg/Svg.tsx.hbs',
      },
      {
        type: 'append',
        path: 'src/components/svg/index.tsx',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template:
          "export { default as {{pascalCase name}}Svg } from './{{pascalCase name}}';",
      },
    ],
  });
};
