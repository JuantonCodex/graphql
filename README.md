# GraphQL Project

Instructions
- Create package.json file
    ```
    npm init -y
    ```
- Create .gitignore file, this example use [gitignore.io](https://www.gitignore.io/api/node,react,macos,angular,windows,webstorm,visualstudiocode) to create it

- Create .editorconfig file, read the [docs](https://editorconfig.org)

    Example
    ```
    # editorconfig.org
    root = true

    [*]
    charset = utf-8
    indent_style = space
    indent_size = 2
    end_of_line = lf
    trim_trailing_whitespace = true
    insert_final_newline = false
    ```
- Install TypeScript if your project going to use it, read [docs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
    ```
    npm i -D typescript
    ```
- Create eslint config file, read the [docs](https://eslint.org/docs/user-guide/getting-started)

    Then you should select the best options for your project
    ```
    npx eslint --init
    ```
    For this template we use this options; check syntax and find problems, JavaScript modules, React, Typescript, run in browser, JavaScript format file and install dependencies