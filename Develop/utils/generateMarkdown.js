function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return 'No License';
  }
};

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
    case 'None':
      return 'No License';
  }
};

function renderLicenseSection(license) {
  if (license === 'None') {
    return;
  }
  if (license === 'MIT') {
    return 'MIT License';
  }
  if (license === 'Apache 2.0') {
    return 'Apache 2.0 License';
  }
  if (license === 'GPL 3.0') {
    return 'GPL 3.0 License';
  }

};

function generateMarkdown(data) {
  return `# ${data.title}


## Badges
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

${data.license}

## Features
${data.features}

## How to Contribute
${data.contributing}

## Tests
${data.tests}

## GitHub/Questions
${data.questions}`
};

export default generateMarkdown;