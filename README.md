# Custom Eslint Configuration Using Stylistic <br /> For Better Format In Visual Studio Code.

Here, we are using stylistic for better format, if you want to know more about stylistic, you can visit [stylistic](https://github.com/stylistic/stylistic). Do you looking for javascript or typescript format better like bellow?

``` typescript
// before
interface Identity {
  name: string;
  age: number;
  city: string;
  hobbies: string;
}

// after
interface Identity {
  name    : string;
  age     : number;
  city    : string;
  hobbies : string;
}
```

Or something like this?

``` typescript
// before
const identity: Identity = {
  name: 'Someone',
  age: 30,
  city: 'Mars',
  hobbies: 'Reading'
};

// after
const identity: Identity = {
  name    : 'Someone',
  age     : 30,
  city    : 'Mars',
  hobbies : 'Reading'
};
```

Here we give you a solution using [stylistic](https://github.com/stylistic/stylistic) for better format. Here we will explain how to use it simply.

## Project Preparation

First, we need to prepare our node project, let's start from scratch. Run the following command to create a new node project.

``` bash
npm init
```

just follow the instruction that will be displayed on your terminal.

## Install Eslint

``` bash
npm init @eslint/config@latest
```

just follow the instruction that will be displayed on your terminal.

## Install Stylistic

``` bash
npm i -D @stylistic/eslint-plugin
```

## Configure Eslint

After that, we need to init stylistic in your `eslint.config.mts` file, add the following configuration:

``` typescript
...
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  ...
  {
    plugins : {
      '@stylistic' : stylistic
    },
    rules : {
      // Stylistic Rules
    }
  }
]);
```

Than we can write rules that we want to use. Here i will give you suggestion rules that you can use.

``` typescript
{
  // General Stylistic Rules
  '@stylistic/array-bracket-spacing'            : [ 'error', 'always' ],
  '@stylistic/arrow-spacing'                    : 'error',
  '@stylistic/block-spacing'                    : 'error',
  '@stylistic/comma-dangle'                     : [ 'error', 'never' ],
  '@stylistic/comma-spacing'                    : [ 'error', { before : false, after : true } ],
  '@stylistic/comma-style'                      : [ 'error', 'last' ],
  '@stylistic/computed-property-spacing'        : [ 'error', 'never' ],
  '@stylistic/dot-location'                     : [ 'error', 'property' ],
  '@stylistic/eol-last'                         : [ 'error', 'always' ],
  '@stylistic/function-call-argument-newline'   : [ 'error', 'consistent' ],
  '@stylistic/function-call-spacing'            : [ 'error', 'never' ],
  '@stylistic/function-paren-newline'           : [ 'error', 'consistent' ],
  '@stylistic/generator-star-spacing'           : [ 'error', { before : true, after : true } ],
  '@stylistic/implicit-arrow-linebreak'         : [ 'error', 'beside' ],
  '@stylistic/indent'                           : [ 'error', 2 ],
  '@stylistic/indent-binary-ops'                : [ 'error', 2 ],
  '@stylistic/key-spacing'                      : [ 'error', { beforeColon : true, afterColon : true, align : 'colon' } ],
  '@stylistic/keyword-spacing'                  : [ 'error', { before : true, after : true } ],
  '@stylistic/lines-around-comment'             : [ 'error', { beforeBlockComment : true } ],
  '@stylistic/lines-between-class-members'      : [ 'error', 'always', { exceptAfterSingleLine : true } ],
  '@stylistic/member-delimiter-style'           : 'error',
  '@stylistic/new-parens'                       : 'error',
  '@stylistic/no-confusing-arrow'               : 'error',
  '@stylistic/no-extra-semi'                    : 'error',
  '@stylistic/no-floating-decimal'              : 'error',
  '@stylistic/no-mixed-operators'               : 'error',
  '@stylistic/no-mixed-spaces-and-tabs'         : 'error',
  '@stylistic/no-multiple-empty-lines'          : [ 'error', { max : 1, maxEOF : 0 } ],
  '@stylistic/no-tabs'                          : 'error',
  '@stylistic/no-trailing-spaces'               : 'error',
  '@stylistic/no-whitespace-before-property'    : 'error',
  '@stylistic/nonblock-statement-body-position' : [ 'error', 'beside' ],
  '@stylistic/object-curly-newline'             : [ 'error', { consistent : true } ],
  '@stylistic/object-curly-spacing'             : [ 'error', 'always' ],
  '@stylistic/object-property-newline'          : [ 'error', { allowAllPropertiesOnSameLine : true } ],
  '@stylistic/padded-blocks'                    : [ 'error', 'always', { allowSingleLineBlocks : true } ],
  '@stylistic/padding-line-between-statements'  : [ 'error', { blankLine : 'always', prev : '*', next : 'return' } ],
  '@stylistic/quote-props'                      : [ 'error', 'consistent-as-needed' ],
  '@stylistic/quotes'                           : [ 'error', 'single', { avoidEscape : true } ],
  '@stylistic/rest-spread-spacing'              : [ 'error', 'never' ],
  '@stylistic/semi'                             : 'error',
  '@stylistic/semi-spacing'                     : 'error',
  '@stylistic/semi-style'                       : [ 'error', 'last' ],
  '@stylistic/space-before-blocks'              : 'error',
  '@stylistic/space-before-function-paren'      : [ 'error', 'never' ],
  '@stylistic/space-in-parens'                  : [ 'error', 'never' ],
  '@stylistic/space-infix-ops'                  : 'error',
  '@stylistic/space-unary-ops'                  : 'error',
  '@stylistic/spaced-comment'                   : [ 'error', 'always' ],
  '@stylistic/switch-colon-spacing'             : [ 'error', { after : true, before : true } ],
  '@stylistic/template-curly-spacing'           : [ 'error', 'always' ],
  '@stylistic/template-tag-spacing'             : [ 'error', 'always' ],
  '@stylistic/type-generic-spacing'             : [ 'error' ],
  '@stylistic/type-named-tuple-spacing'         : [ 'error' ],
  '@stylistic/wrap-iife'                        : [ 'error', 'any' ],
  '@stylistic/wrap-regex'                       : 'error',
  '@stylistic/yield-star-spacing'               : [ 'error', 'both' ],
  // JSX Stylistic Rules
  '@stylistic/jsx-child-element-spacing'        : 'error',
  '@stylistic/jsx-closing-bracket-location'     : 'error',
  '@stylistic/jsx-closing-tag-location'         : 'error',
  '@stylistic/jsx-curly-brace-presence'         : [ 'error', 'never' ],
  '@stylistic/jsx-curly-newline'                : 'error',
  '@stylistic/jsx-curly-spacing'                : [ 'error', { when : 'never', children : true } ],
  '@stylistic/jsx-equals-spacing'               : [ 'error', 'never' ],
  '@stylistic/jsx-first-prop-new-line'          : [ 'error', 'multiline-multiprop' ],
  '@stylistic/jsx-function-call-newline'        : [ 'error', 'multiline' ],
  '@stylistic/jsx-indent'                       : [ 'error', 2 ],
  '@stylistic/jsx-indent-props'                 : [ 'error', 2 ],
  '@stylistic/jsx-newline'                      : [ 'error', { prevent : true } ],
  '@stylistic/jsx-one-expression-per-line'      : [ 'error', { allow : 'single-line' } ],
  '@stylistic/jsx-pascal-case'                  : 'error',
  '@stylistic/jsx-props-no-multi-spaces'        : 'error',
  '@stylistic/jsx-quotes'                       : [ 'error', 'prefer-double' ],
  '@stylistic/jsx-self-closing-comp'            : 'error',
  '@stylistic/jsx-sort-props'                   : 'error',
  '@stylistic/jsx-tag-spacing'                  : [ 'error', { closingSlash : 'never' } ],
  '@stylistic/jsx-wrap-multilines'              : 'error'
}
```

You can also use your own rules, you can find all the rules here [https://eslint.style/rules](https://eslint.style/rules), and adjust them to your needs.

## VSCode Configuration

For more better experience, we also config our VS Code configuration, in this section I will show you how to configure it in workspaces scope. Add `.vscode/settings.json` file to your workspace, and add the following configuration:

``` json
{
  "editor.formatOnSave": true,
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.format.enable": false
}
```

The configuration above is just an example, you can adjust it to your needs.