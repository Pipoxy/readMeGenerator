// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  } else {
    return [];
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null) {
    return [];
  } else if (license === "MIT") {
    return `[![License](https://opensource.org/licenses/${license})`;
  } else if (license === "Apache") {
    return `[![License](https://opensource.org/licenses/${license}-2.0)`;
  } else {
    return `[![License](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return [];
  } else {
    return renderLicenseBadge(license), renderLicenseLink(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  [Description](#description) 
  [Installation](#Installation) 
  [Usage](#Usage) 
  [Contrubutors](#Contributors) 
  [Tests](#Tests) 
  [License](#License) 

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ##Usage

  ${data.usage}
  
  ##Contributors

  ${data.contributing}

  ##Tests

  ${data.tests}

  ##License

  ${renderLicenseLink(data.license)}`;
}

module.exports = generateMarkdown;
