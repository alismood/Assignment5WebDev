// ==========================================
// Part 1: Profile Object, Data Types & Arithmetic
// ==========================================

// Task 1: The Personal Info Object
const userProfile = {
    name: "Zhabaikhan Ali",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Coding", "Reading", "Gaming"]
};

// Select DOM elements for displaying profile data
const displayName = document.getElementById("displayName");
const displayBirthYear = document.getElementById("displayBirthYear");
const displayIsDeveloper = document.getElementById("displayIsDeveloper");
const displayAge = document.getElementById("displayAge");
const displayMonths = document.getElementById("displayMonths");
const displayHobbiesCount = document.getElementById("displayHobbiesCount");
const profileCard = document.getElementById("profileCard");

// Task 2: Arithmetic Calculations and Display Function
function updateProfileDisplay() {
    const currentYear = 2026;
    const currentAge = currentYear - userProfile.birthYear;
    const ageInMonths = currentAge * 12;
    const totalHobbies = userProfile.hobbies.length;

    // Update content on the web page
    displayName.textContent = userProfile.name;
    displayBirthYear.textContent = userProfile.birthYear;
    displayIsDeveloper.textContent = userProfile.isDeveloper;
    displayAge.textContent = currentAge;
    displayMonths.textContent = ageInMonths;
    displayHobbiesCount.textContent = totalHobbies;

    // Output values to the browser console
    console.log("User Profile:", userProfile);
    console.log("Calculated Age (Years):", currentAge);
    console.log("Calculated Age (Months):", ageInMonths);
    console.log("Total Hobbies Count:", totalHobbies);
}

// ==========================================
// Part 2: Form Input & Event Responses
// ==========================================

// Task 3 & Task 4: Capture Form Input and Update Profile Object
const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("usernameInput");
const birthYearInput = document.getElementById("birthYearInput");
const statusMessage = document.getElementById("statusMessage");

profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newName = usernameInput.value.trim();
    const newBirthYear = Number(birthYearInput.value);

    if (newName !== "" && newBirthYear > 1900 && newBirthYear <= 2026) {
        // Update userProfile object properties
        userProfile.name = newName;
        userProfile.birthYear = newBirthYear;

        // Recalculate and update page content
        updateProfileDisplay();

        // Change element content and styles dynamically
        statusMessage.textContent = "Profile updated successfully.";
        statusMessage.style.color = "#16a34a";
        profileCard.style.borderColor = "#2563eb";

        // Clear form inputs
        usernameInput.value = "";
        birthYearInput.value = "";
    } else {
        statusMessage.textContent = "Please enter a valid name and birth year.";
        statusMessage.style.color = "#dc2626";
    }
});

// ==========================================
// Part 3: DOM List Manipulation
// ==========================================

// Task 5: Creating and Removing Elements
const hobbiesList = document.getElementById("hobbiesList");
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

// Render the initial hobbies array using a for loop
function renderInitialHobbies() {
    hobbiesList.innerHTML = "";
    for (let i = 0; i < userProfile.hobbies.length; i++) {
        const li = document.createElement("li");
        li.textContent = userProfile.hobbies[i];
        hobbiesList.appendChild(li);
    }
}

// Add new item to the list
addItemBtn.addEventListener("click", function () {
    const newItemText = itemInput.value.trim();

    if (newItemText !== "") {
        // Create new li element and append to ul
        const newLi = document.createElement("li");
        newLi.textContent = newItemText;
        hobbiesList.appendChild(newLi);

        // Update hobbies array inside userProfile and refresh count
        userProfile.hobbies.push(newItemText);
        updateProfileDisplay();

        itemInput.value = "";
    }
});

// Remove the last item from the list
removeItemBtn.addEventListener("click", function () {
    const lastItem = hobbiesList.lastElementChild;

    if (lastItem !== null) {
        hobbiesList.removeChild(lastItem);

        // Remove last item from hobbies array and refresh count
        userProfile.hobbies.pop();
        updateProfileDisplay();
    }
});

// Initialize page on load
renderInitialHobbies();
updateProfileDisplay();
