// //corrected code
// // // // Get the HTML elements
// const profilepickInput = document.getElementById('profilepick') as HTMLInputElement;
// const resumeForm = document.getElementById('resume') as HTMLFormElement;
// const nameElement = document.getElementById('name') as HTMLInputElement;
// const emailElement = document.getElementById('email') as HTMLInputElement;
// const phoneElement = document.getElementById('phone') as HTMLInputElement;
//  const addressElement = document.getElementById('address') as HTMLInputElement;
// const educationElement = document.getElementById('education') as HTMLInputElement;
// const experienceElement = document.getElementById('experience') as HTMLInputElement;
// const skillsInput = document.getElementById('Skills') as HTMLInputElement;
// const addSkillBtn = document.getElementById('addskillbtn') as HTMLButtonElement;
// const removeSkillBtn = document.getElementById('remskillbtn') as HTMLButtonElement;
// const skillsList = document.getElementById('skills-list') as HTMLUListElement;
// const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;
var _a;
// // //profile pick 
// // const profilepick = profilepickInput.files?.[0]
// // const profilePickURL = profilepick ? URL.createObjectURL(profilepick) : "";
// // Initialize an array to store the skills
// let skills: string[] = [];
// // Regular expressions for validation
// const nameRegex = /^[a-zA-Z ]{2,30}$/;
// const emailRegex = /^[a-zA-Z0-9]+@[a-z]{5,7}.[a-zA-Z]{2,}$/;
// const phoneRegex =  /^[0-9]{10}$/;
//  const addressRegex = /^[a-zA-Z0-9\s,]{2,}$/;
// const educationRegex = /^[a-zA-Z0-9\s.,]{2,}$/;
// const experienceRegex = /^[a-zA-Z0-9\s.,]{2,}$/;
// // Add event listener to the form submission
// resumeForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // Get the form values
//   const name = nameElement.value;
//   const email = emailElement.value;
//   const phone = phoneElement.value;
//   const address = addressElement.value;
//   // const profilePick = profilepickInput.value;
//   const education = educationElement.value;
//   const experience = experienceElement.value;
// // // //profile pick 
// // const profilepick = profilepickInput.files?.[0]
// // const profilePickURL = profilepick ? URL.createObjectURL(profilepick) : "";
//   // Validate the form values
//   if (!nameRegex.test(name)) {
//     alert('Invalid name Please enter a name with only letters and spaces.');
//     return;
//   }
//   if (!emailRegex.test(email)) {
//     alert('Invalid email Please enter a valid email address.');
//     return;
//   }
//   if (!phoneRegex.test(phone)) {
//     alert('Invalid phone number Please enter a phone number in the format XXX-XXX-XXXX.');
//     return;
//   }
//   if (!addressRegex.test(address)) {
//         alert('Invalid address Please enter a valid address.');
//         return;
//       }
//   if (!educationRegex.test(education)) {
//     alert('Invalid education Please enter a valid education.');
//     return;
//   }
//   if (!experienceRegex.test(experience)) {
//     alert('Invalid experience Please enter a valid experience.');
//     return;
//   }
//   // Create the resume output
//   const resumeOutput = `
//     <h2>Resume</h2>
//     <p><strong>Name:</strong>
//     <span id="edit-name" class="editable">${name}</span>
//     </p>
//     <p><strong>Email:</strong>
//     <span id="edit-email" class="editable">${email}</span>
//     </p>
//     <p><strong>Phone Number:</strong>
//     <span id="edit-phone" class="editable">${phone}</span>
//     </p>
//     <h3>Education:</h3>
//     <p id="edit-education" class="editable">${education}</p>
//     <h3>Experience</h3>
//     <p id="edit-experience" class="editable">${experience}</p>
//     <h3>Skills</h3>
//     <ul id="edit-skills" class="editable">
//       ${skills.map((skill) => `<li>${skill}</li>`).join('')}
//     </ul>
//   `;
//   // Display the resume output
//   resumeOutputElement.innerHTML = resumeOutput;
//    makeEditable();
//   // Update the skills list
//   updateSkillsList();
// });
// // Function to make the resume output editable
// function makeEditable() {
//   const editableElements = document.querySelectorAll('.editable');
//   editableElements.forEach((element) => {
//     element.addEventListener('click', function() => {
//       const currentElement = element as HTMLElement;
//       const currentValue = currentElement.textContent || '';
// //replace content
//       if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.value = currentValue;
//         input.classList.add('editing-input');
//         input.addEventListener('blur', () => {
//           currentElement.textContent = input.value;
//           currentElement.style.display = 'inline';
//           input.remove();
//         });
//         currentElement.style.display = 'none';
//         currentElement.parentNode?.insertBefore(input, currentElement);
//         input.focus();
//       }
//     });
//   });
// }
// // Add event listener to the Add button
// addSkillBtn.addEventListener('click', () => {
//   const newSkill = skillsInput.value.trim();
//   if (newSkill !== '') {
//     skills.push(newSkill);
//     skillsInput.value = '';
//     updateSkillsList();
//   }
// });
// // Add event listener to the Remove button
// removeSkillBtn.addEventListener('click', () => {
//     if (skills.length > 0) {
//       skills.pop();
//       updateSkillsList();
//     }
//   });
// // Add event listener to the Remove button
// removeSkillBtn.addEventListener('click', () => {
//   const skillToRemove = skillsInput.value.trim();
//   if (skillToRemove !== '') {
//     const index = skills.indexOf(skillToRemove);
//     if (index !== -1) {
//       skills.splice(index, 1);
//       skillsInput.value = '';
//       updateSkillsList();
//     }
//   }
// });
// // Function to update the skills list
// function updateSkillsList() {
//   skillsList.innerHTML = '';
//   skills.forEach((skill) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = skill;
//     skillsList.appendChild(listItem);
//   });
// }
// // Initialize the skills list
// updateSkillsList();
// // Add event listener to the form submit
// document.getElementById("resume")?.addEventListener('submit', function (event) {
//   event.preventDefault();
//   updateResumeOutput();
// });
// // Get the HTML elements
// const nameElement = document.getElementById("name") as HTMLInputElement;
// const emailElement = document.getElementById("email") as HTMLInputElement;
// const phoneElement = document.getElementById("phone") as HTMLInputElement;
// const addressElement = document.getElementById("address") as HTMLInputElement;
// const educationElement = document.getElementById("education") as HTMLInputElement;
// const experienceElement = document.getElementById("experience") as HTMLInputElement;
// const skillsInput = document.getElementById("Skills") as HTMLInputElement;
// const addSkillBtn = document.getElementById('addskillbtn') as HTMLButtonElement;
// const removeSkillBtn = document.getElementById('remskillbtn') as HTMLButtonElement;
// const skillsList = document.getElementById('skills-list') as HTMLUListElement;
// const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;
// // Initialize an array to store the skills
// let skills: string[] = [];
// // Add event listener to the Add button
// addSkillBtn.addEventListener('click', () => {
//   const newSkill = skillsInput.value.trim();
//   if (newSkill !== '') {
//     skills.push(newSkill);
//     skillsInput.value = '';
//     updateSkillsList();
//     updateResumeOutput();
//   }
// });
// // Add event listener to the Remove button
// removeSkillBtn.addEventListener('click', () => {
//   const skillToRemove = skillsInput.value.trim();
//   if (skillToRemove !== '') {
//     const index = skills.indexOf(skillToRemove);
//     if (index !== -1) {
//       skills.splice(index, 1);
//       skillsInput.value = '';
//       updateSkillsList();
//       updateResumeOutput();
//     }
//   } else if (skills.length > 0) {
//     skills.pop();
//     updateSkillsList();
//     updateResumeOutput();
//   }
// });
// // Function to update the skills list
// function updateSkillsList() {
//   skillsList.innerHTML = '';
//   skills.forEach((skill) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = skill;
//     skillsList.appendChild(listItem);
//   });
// }
// // Function to update the resume output
// function updateResumeOutput() {
//   if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsInput) {
//     const name = nameElement.value;
//     const email = emailElement.value;
//     const phone = phoneElement.value;
//     const address = addressElement.value;
//     const education = educationElement.value;
//     const experience = experienceElement.value;
//     // Create the resume output
//     const resumeOutput = `
//       <h2>Resume</h2>
//       <p><strong>Name:</strong>
//       <span id="edit-name" class="editable">${name}</span>
//       </p>
//       <p><strong>Email:</strong>
//       <span id="edit-email" class="editable">${email}</span>
//       </p>
//       <p><strong>Phone Number:</strong>
//       <span id="edit-phone" class="editable">${phone}</span>
//       </p>
//       <h3>Education:</h3>
//       <p id="edit-education" class="editable">${education}</p>
//       <h3>Experience</h3>
//       <p id="edit-experience" class="editable">${experience}</p>
//       <h3>Skills</h3>
//       <ul id="edit-skills" class="editable">
//         ${skills.map((skill) => `<li>${skill}</li>`).join('')}
//       </ul>
//     `;
//     // Display the resume output
//     if (resumeOutputElement) {
//       resumeOutputElement.innerHTML = resumeOutput;
//       makeEditable();
//     } else {
//       console.error('The resume Output Element is missing');
//     }
//   } else {
//     console.error('One or more elements are missing');
//   }
// }
// // Initialize the skills list
// updateSkillsList();
// // Add event listener to the form submit
// document.getElementById("resume")?.addEventListener('submit', function (event) {
//   event.preventDefault();
//   updateResumeOutput();
// });
// // Function to make the resume output editable
// function makeEditable() {
//   const editableElements = document.querySelectorAll('.editable');
//   editableElements.forEach((element) => {
//     element.addEventListener('click', function() {
//       const currentElement = element as HTMLElement;
//       const currentValue = currentElement.textContent || '';
//       // Replace content
//       if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.value = currentValue;
//         input.classList.add('editing-input');
//         input.addEventListener('blur', () => {
//           currentElement.textContent = input.value;
//           currentElement.style.display = 'inline';
//           input.remove();
//         });
//         currentElement.style.display = 'none';
//         currentElement.parentNode?.insertBefore(input, currentElement);
//         input.focus();
//       }
//     });
//   });
// }
//without errors
// Get the HTML elements
//const profilepickInput = document.getElementById('profilepick') as HTMLInputElement;
// const resumeForm = document.getElementById('resume') as HTMLFormElement;
// const nameElement = document.getElementById('name') as HTMLInputElement;
// const emailElement = document.getElementById('email') as HTMLInputElement;
// const phoneElement = document.getElementById('phone') as HTMLInputElement;
// const addressElement = document.getElementById('address') as HTMLInputElement;
// const educationElement = document.getElementById('education') as HTMLInputElement;
// const experienceElement = document.getElementById('experience') as HTMLInputElement;
// const skillsInput = document.getElementById('Skills') as HTMLInputElement;
// const addSkillBtn = document.getElementById('addskillbtn') as HTMLButtonElement;
// const removeSkillBtn = document.getElementById('remskillbtn') as HTMLButtonElement;
// const skillsList = document.getElementById('skills-list') as HTMLUListElement;
// const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;
// // Initialize an array to store the skills
// let skills: string[] = [];
// // Regular expressions for validation
// const nameRegex = /^[a-zA-Z ]{2,30}$/;
// const emailRegex = /^[a-zA-Z0-9]+@[a-z]{5,7}.[a-zA-Z]{2,}$/;
// const phoneRegex = /^[0-9]{10}$/;
// const addressRegex = /^[a-zA-Z0-9\s,]{2,}$/;
// const educationRegex = /^[a-zA-Z0-9\s.,]{2,}$/;
// const experienceRegex = /^[a-zA-Z0-9\s.,]{2,}$/;
// // Add event listener to the form submission
// resumeForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // Get the form values
//   const name = nameElement.value;
//   const email = emailElement.value;
//   const phone = phoneElement.value;
//   const address = addressElement.value;
//   // const profilePick = profilepickInput.value;
//   const education = educationElement.value;
//   const experience = experienceElement.value;
//   // Validate the form values
//   if (!nameRegex.test(name)) {
//     alert('Invalid name Please enter a name with only letters and spaces.');
//     return;
//   }
//   if (!emailRegex.test(email)) {
//     alert('Invalid email Please enter a valid email address.');
//     return;
//   }
//   if (!phoneRegex.test(phone)) {
//     alert('Invalid phone number Please enter a phone number in the format XXX-XXX-XXXX.');
//     return;
//   }
//   if (!addressRegex.test(address)) {
//     alert('Invalid address Please enter a valid address.');
//     return;
//   }
//   if (!educationRegex.test(education)) {
//     alert('Invalid education Please enter a valid education.');
//     return;
//   }
//   if (!experienceRegex.test(experience)) {
//     alert('Invalid experience Please enter a valid experience.');
//     return;
//   }
//   // Create the resume output
//   const resumeOutput = `
//     <h2>Resume</h2>
//     <p><strong>Name:</strong>
//     <span id="edit-name" class="editable">${name}</span>
//     </p>
//     <p><strong>Email:</strong>
//     <span id="edit-email" class="editable">${email}</span>
//     </p>
//     <p><strong>Phone Number:</strong>
//     <span id="edit-phone" class="editable">${phone}</span>
//     </p>
//     <h3>Education:</h3>
//     <p id="edit-education" class="editable">${education}</p>
//     <h3>Experience</h3>
//     <p id="edit-experience" class="editable">${experience}</p>
//     <h3>Skills</h3>
//     <ul id="edit-skills" class="editable">
//       ${skills.map((skill) => `<li>${skill}</li>`).join('')}
//     </ul>
//   `;
//   // Display the resume output
//   resumeOutputElement.innerHTML = resumeOutput;
//   makeEditable();
//   // Update the skills list
//   updateSkillsList();
// });
// // Function to make the resume output editable
// function makeEditable() {
//   const editableElements = document.querySelectorAll('.editable');
//   editableElements.forEach((element) => {
//     element.addEventListener('click', function() {
//       const currentElement = element as HTMLElement;
//       const currentValue = currentElement.textContent || '';
// //replace content
//       if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.value = currentValue;
//         input.classList.add('editing-input');
//         input.addEventListener('blur', () => {
//           currentElement.textContent = input.value;
//           currentElement.style.display = 'inline';
//           input.remove();
//         });
//         currentElement.style.display = 'none';
//         currentElement.parentNode?.insertBefore(input, currentElement);
//         input.focus();
//       }
//     });
//   });
// }
// // Add event listener to the Add button
// addSkillBtn.addEventListener('click', () => {
//   const newSkill = skillsInput.value.trim();
//   if (newSkill !== '') {
//     skills.push(newSkill);
//     skillsInput.value = '';
//     updateSkillsList();
//   }
// });
// // Add event listener to the Remove button
// removeSkillBtn.addEventListener('click', () => {
//   if (skills.length > 0) {
//     skills.pop();
//     updateSkillsList();
//   }
// });
// // Function to update the skills list
// function updateSkillsList() {
//   skillsList.innerHTML = '';
//   skills.forEach((skill) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = skill;
//     skillsList.appendChild(listItem);
//   });
// }
// // Initialize the skills list
// updateSkillsList();
// Get the HTML elements
var nameElement = document.getElementById("name");
var emailElement = document.getElementById("email");
var phoneElement = document.getElementById("phone");
var addressElement = document.getElementById("address");
var educationElement = document.getElementById("education");
var experienceElement = document.getElementById("experience");
var skillsInput = document.getElementById("Skills");
var addSkillBtn = document.getElementById('addskillbtn');
var removeSkillBtn = document.getElementById('remskillbtn');
var skillsList = document.getElementById('skills-list');
var resumeOutputElement = document.getElementById('resumeOutput');
// Initialize an array to store the skills
var skills = [];
// Function to update the resume output
function updateResumeOutput() {
    if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsInput) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        // Regular expressions for validation
        var nameRegex = /^[a-zA-Z ]{2,30}$/;
        var emailRegex = /^[a-zA-Z0-9]+@[a-z]{5,7}.[a-zA-Z]{2,}$/;
        var phoneRegex = /^[0-9]{10}$/;
        var addressRegex = /^[a-zA-Z0-9\s,]{2,}$/;
        var educationRegex = /^[a-zA-Z0-9\s.,]{2,}$/;
        var experienceRegex = /^[a-zA-Z0-9\s.,]{2,}$/;
        // Validate the form values
        if (!nameRegex.test(name_1)) {
            alert('Invalid name Please enter a name with only letters and spaces.');
            return;
        }
        if (!emailRegex.test(email)) {
            alert('Invalid email Please enter a valid email address.');
            return;
        }
        if (!phoneRegex.test(phone)) {
            alert('Invalid phone number Please enter a phone number in the format XXX-XXX-XXXX.');
            return;
        }
        if (!addressRegex.test(address)) {
            alert('Invalid address Please enter a valid address.');
            return;
        }
        if (!educationRegex.test(education)) {
            alert('Invalid education Please enter a valid education.');
            return;
        }
        if (!experienceRegex.test(experience)) {
            alert('Invalid experience Please enter a valid experience.');
            return;
        }
        // Create the resume output
        var resumeOutput = "\n      <h2>Resume</h2>\n      <p><strong>Name:</strong>\n      <span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span>\n      </p>\n      <p><strong>Email:</strong>\n      <span id=\"edit-email\" class=\"editable\">").concat(email, "</span>\n      </p>\n      <p><strong>Phone Number:</strong>\n      <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span>\n      </p>\n\n      <h3>Education:</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n      <h3>Experience</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n      <h3>Skills</h3>\n      <ul id=\"edit-skills\" class=\"editable\">\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n      </ul>\n    ");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error('The resume Output Element is missing');
        }
    }
    else {
        console.error('One or more elements are missing');
    }
}
// Add event listener to the form submit
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    updateResumeOutput();
});
// Function to make the resume output editable
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || '';
            // Replace content
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
// Add event listener to the Add button
addSkillBtn.addEventListener('click', function () {
    var newSkill = skillsInput.value.trim();
    if (newSkill !== '') {
        skills.push(newSkill);
        skillsInput.value = '';
        updateSkillsList();
        updateResumeOutput();
    }
});
// Add event listener to the Remove button
removeSkillBtn.addEventListener('click', function () {
    var skillToRemove = skillsInput.value.trim();
    if (skillToRemove !== '') {
        var index = skills.indexOf(skillToRemove);
        if (index !== -1) {
            skills.splice(index, 1);
            skillsInput.value = '';
            updateSkillsList();
            updateResumeOutput();
        }
    }
    else if (skills.length > 0) {
        skills.pop();
        updateSkillsList();
        updateResumeOutput();
    }
});
// Function to update the skills list
function updateSkillsList() {
    skillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
}
