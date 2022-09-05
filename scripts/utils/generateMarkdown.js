// declaring the global variables
let licenseBadge = "";
let licenseLink = "";
let licenseSection = "";

// function that returns a license badge based on which license is passed in
// If there is no license, generating the no license required badge
function renderLicenseBadge(license) {
  if (license === "No license required") {
    licenseBadge = `![Github License](https://img.shields.io/badge/licence-no%20licence%20required-yellow)`;
  } else  {
    licenseBadge = `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, returning an empty string
function renderLicenseLink(license) {
  licenseLink = `* [License](#license)`;

  if (license === "No license required") {
    licenseLink = "";
  }
  return licenseLink;
}

// function that returns the license section of README
// If there is no license, returning an empty string
function renderLicenseSection(license) {
  licenseSection = `## License
  ${licenseBadge} `;

  if (license === "No license required") {
    licenseSection = "";
  }
  return licenseSection;
}

// function to generate markdown for README
function generateReadme(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);
  console.log(data.license);
  return `# ${data.title}
  
  ${licenseBadge}

  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${licenseLink}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ${licenseSection}

  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateReadme;
