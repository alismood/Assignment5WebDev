# Assignment 5: JavaScript Basics (DOM Manipulation & Events)

**Name:** Zhabaikhan Ali  
**Group:** IT-2503  

---

## Part 1: Profile Object, Data Types & Arithmetic

### Task 1. The Personal Info Object
Created a `const` object named `userProfile` that stores a string (`name`), a number (`birthYear`), a boolean (`isDeveloper`), and an array (`hobbies`).

**Screenshot for Task 1:**

<!-- Paste Task 1 screenshot here, for example: ![Task 1](screenshots/task1.png) -->


### Task 2. Arithmetic Calculations
Used arithmetic operators to dynamically calculate the current age (`currentYear - birthYear`), age in months (`currentAge * 12`), and total hobbies count (`hobbies.length`), displaying the results both on the page and in the browser console.

**Screenshot for Task 2:**

<!-- Paste Task 2 screenshot here, for example: ![Task 2](screenshots/task2.png) -->


---

## Part 2: Form Input & Event Responses

### Task 3. HTML Form Setup
Created an HTML form containing input fields for Username and Birth Year, along with a "Create / Update Profile" submit button.

**Screenshot for Task 3:**

<!-- Paste Task 3 screenshot here, for example: ![Task 3](screenshots/task3.png) -->


### Task 4. Event Listener
Added a `submit` event listener to the form that reads the user input values, updates the `userProfile` object, recalculates the age metrics, and updates the DOM text and styles.

**Screenshot for Task 4:**

<!-- Paste Task 4 screenshot here, for example: ![Task 4](screenshots/task4.png) -->


---

## Part 3: DOM List Manipulation

### Task 5. Creating & Removing Elements
Created an unordered list (`<ul>`) displaying the hobbies array, an "Add Item" button that creates and appends a new `<li>` element using `document.createElement` and `appendChild`, and a "Remove Item" button that deletes the last `<li>` item using `removeChild`.

**Screenshot for Task 5:**

<!-- Paste Task 5 screenshot here, for example: ![Task 5](screenshots/task5.png) -->


---

## Summary of Work Process

In this assignment, I built an interactive web page using HTML5, CSS3, and JavaScript. First, I structured the page layout in `index.html` with three main sections corresponding to the assignment parts and styled them cleanly in `style.css`. Next, in `script.js`, I created the `userProfile` object with different data types and wrote a function to compute the user's age in years and months using arithmetic operators. Then, I connected the HTML form to JavaScript using `addEventListener` to update the profile data and page styles dynamically when submitted. Finally, I implemented DOM list manipulation using `createElement`, `appendChild`, and `removeChild` to add and remove list items dynamically.
