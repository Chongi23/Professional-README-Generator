// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github licnese](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
 return "";
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}
 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}
  ${renderLicenseSection(data.license)}

  
  ## Description 
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Questions](#questions)
  
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ##License
  This project is licensed under the ${data.license}

  ##Badges
  
  ${renderLicenseBadge(data.license)}

  
  ## Questions
  
  * [Github](https://github.com/${data.github})
  * [Email](${data.email})
  * For any further questions, contact me at: [email](${data.email})
  
  ##Contribution
  

  ##Tests

  ${data.tests}
  `;

}
// should it be renderLicenseSection?? test app and check 
module.exports = generateMarkdown;
