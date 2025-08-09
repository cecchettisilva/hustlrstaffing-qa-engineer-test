# HustlrStaffing QA Engineer Test

## Project Overview

This project contains automated end-to-end tests using Cypress for a React Ecommerce application (https://bitbucket.org/dredsoftlabs/ecommerce/src/main/), as well as manual test cases and bug reports. The repository is organized into two main sections:
- **Cypress**: Automated tests and support files
- **Manual Test**: Manual test cases, bug reports, and related images

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/cecchettisilva/hustlrstaffing-qa-engineer-test.git
   cd hustlrstaffing-qa-engineer-test
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

---

## Running React ecommerce locally

### Installation
1. Clone this repository:
   ```sh
   git clone https://dredsoftlabs-admin@bitbucket.org/dredsoftlabs/ecommerce.git
   cd ecommerce
   ```
2. Install dependencies:
   ```sh
   npm install 
   or 
   npm install react-material-ui-carousel --save --legacy-peer-deps
   ```
3. Start the server
   ```sh
   npm start
   ```
4. The server should now be running. You can access the application by opening a web browser and entering the following URL:
   ```sh
   http://localhost:3000
   ```
---

## Running Cypress Tests

### Open Cypress Test Runner (GUI)

- Step 1

```sh
npx cypress open
```
   This will launch the Cypress Test Runner, where you can select and run tests interactively.

- Step 2 <br>

In the Cypress playground opened, select the react-ecommerce folder and open the add_to_cart.cy.js file to run the tests.

---

## Project Structure

### Cypress Folder
- **cypress/e2e/react-ecommerce/add_to_cart.cy.js**: Main end-to-end test file for adding products to the cart and validating cart functionality.
- **cypress/fixtures/example.json**: Example fixture data used in tests.
- **cypress/support/commands.js**: Custom Cypress commands to simplify and reuse test logic.
- **cypress/support/e2e.js**: Support file loaded before test files; can be used for global configuration and behavior.
- **cypress/downloads/**: Default folder for files downloaded during tests (if any).

### Configuration
- **cypress.config.js**: Cypress configuration file.
- **package.json**: Project dependencies and scripts.

---

## Manual Test Folder 

- **manual test/test-cases.md**: Manual test cases for the React Ecommerce application, written in markdown file.
- **manual test/test-cases-with-bugs.md**: Manual test cases that include known bugs, with detailed steps to reproduce and expected/actual results.
- **manual test/images/**: Folder containing screenshots and images referenced in the manual test cases. Each image is named for easy identification and traceability.