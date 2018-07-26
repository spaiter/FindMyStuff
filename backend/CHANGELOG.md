# 1.2.0 - Some refactoring, new business logic
  - Add addBalance business, tests and endpoint
  - Rename entities/contracts into entities/repositories
  - Rename external/contracts into external/repositories
  - Refactor app.ts to load external repositories as instance of a repository
  - Refactor schama injection 
  - Update awilix

# 1.1.0 - More separation of concerns, add CI
  - Add a contract to retrive error messages
  - Add circle-ci integration

# 1.0.1 - Bug fixes, more separation of concerns
  - Fix type coercing between express and application. 
  - Add lodash, ajv, debug as external library dependecies
  - Fix gulp tasks
# 1.0.0 - First steps in implementing a clean architecture
  - Add gulp taks
  - Create initial project structure
  - Add test runner logic