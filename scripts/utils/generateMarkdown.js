// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = "";
let licenseLink = "";
let licenseSection = "";

function renderLicenseBadge(license) {
  // let licenseBadge = "";
  //No licence required https://img.shields.io/badge/licence-no%20licence%20required-yellow
  if (license === "No licence required") {
    licenseBadge = `![License](https://img.shields.io/badge/licence-no%20licence%20required-yellow)`;
  } else  {
    licenseBadge = `![License](http://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = `* [License](#license)`;

  if (license === "None") {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = `${license} `;

  if (license === "None") {
    licenseSection = "";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateReadme(data) {
  renderLicenseBadge();
  renderLicenseLink();
  renderLicenseSection();
  console.log(data.license);
  return `# ${data.title}
  
  ![Github licence](${licenseBadge})

  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  ${renderLicenseSection}

  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateReadme;
