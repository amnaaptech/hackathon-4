
// Get the HTML elements
const nameElement = document.getElementById("name") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const phoneElement = document.getElementById("phone") as HTMLInputElement;
const addressElement = document.getElementById("address") as HTMLInputElement;
const educationElement = document.getElementById("education") as HTMLInputElement;
const experienceElement = document.getElementById("experience") as HTMLInputElement;
const skillsInput = document.getElementById("Skills") as HTMLInputElement;
const addSkillBtn = document.getElementById('addskillbtn') as HTMLButtonElement;
const removeSkillBtn = document.getElementById('remskillbtn') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;
const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;

// Initialize an array to store the skills
let skills: string[] = [];

// Function to update the resume output
function updateResumeOutput() {
  if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsInput) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-zA-Z0-9]+@[a-z]{5,7}.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const addressRegex = /^[a-zA-Z0-9\s,]{2,}$/;
    const educationRegex = /^[a-zA-Z0-9\s.,]{2,}$/;
    const experienceRegex = /^[a-zA-Z0-9\s.,]{2,}$/;

    // Validate the form values
    if (!nameRegex.test(name)) {
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
    const resumeOutput = `
      <h2>Resume</h2>
      <p><strong>Name:</strong>
      <span id="edit-name" class="editable">${name}</span>
      </p>
      <p><strong>Email:</strong>
      <span id="edit-email" class="editable">${email}</span>
      </p>
      <p><strong>Phone Number:</strong>
      <span id="edit-phone" class="editable">${phone}</span>
      </p>

      <h3>Education:</h3>
      <p id="edit-education" class="editable">${education}</p>

      <h3>Experience</h3>
      <p id="edit-experience" class="editable">${experience}</p>

      <h3>Skills</h3>
      <ul id="edit-skills" class="editable">
        ${skills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>
    `;
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      makeEditable();
    } else {
      console.error('The resume Output Element is missing');
    }
  } else {
    console.error('One or more elements are missing');
  }
}

// Add event listener to the form submit
document.getElementById("resume")?.addEventListener('submit', function (event) {
  event.preventDefault();
  updateResumeOutput();
});

// Function to make the resume output editable
function makeEditable() {
  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach((element) => {
    element.addEventListener('click', function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || '';

      // Replace content
      if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;
        input.classList.add('editing-input');

        input.addEventListener('blur', () => {
          currentElement.textContent = input.value;
          currentElement.style.display = 'inline';
          input.remove();
        });

        currentElement.style.display = 'none';
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}

// Add event listener to the Add button
addSkillBtn.addEventListener('click', () => {
  const newSkill = skillsInput.value.trim();
  if (newSkill !== '') {
    skills.push(newSkill);
    skillsInput.value = '';
    updateSkillsList();
    updateResumeOutput();
  }
});

// Add event listener to the Remove button
removeSkillBtn.addEventListener('click', () => {
  const skillToRemove = skillsInput.value.trim();
  if (skillToRemove !== '') {
    const index = skills.indexOf(skillToRemove);
    if (index !== -1) {
      skills.splice(index, 1);
      skillsInput.value = '';
      updateSkillsList();
      updateResumeOutput();
    }
  } else if (skills.length > 0) {
    skills.pop();
    updateSkillsList();
    updateResumeOutput();
  }
});

// Function to update the skills list
function updateSkillsList() {
  skillsList.innerHTML = '';
  skills.forEach((skill) => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });
}