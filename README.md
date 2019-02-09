# [JAVASCRIPT] Data Structure and Algorithms
Examples of implement data structures and algorithms in es6 2015.

Each folder will hold the implementation of the data structure / algorithm
and also a template file without the implementation so users can easily try it out
on their own. I also included simple unit test cases for each topic with some comments
on said topic.

# Folder Structure

    .
    ├── example                   # Folder containing the data structure/algorithm
        ├── example.js            # Completed code of the data structure/algorithm
        ├── example.template.js   # Template is a file without the implementation
        ├── example.test.js       # Test file
    ├── package.json              # Node packages to install for testing
    ├── LICENSE
    └── README.md

# Test
Install the test packages needed
```
npm install
```
Run a test ( via jest). https://jestjs.io/docs/en/cli
```
jest my-test #or
jest path/to/my-test.js
```
or
```
yarn test my-test
yarn test path/to/my-test.js
```