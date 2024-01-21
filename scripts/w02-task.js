/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Nathan Egbert';
const currentYear = '2024';
const profilePicture = "images/photo.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
imageElement.src = 'images/photo.jpg';

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Image of ${fullName}`)




/* Step 5 - Array */
let foods = ['Sushi', 'Pizza', 'Biscuits and Gravy', 'Naan Bread']
foodElement.innerHTML = foods;
let newFood = 'Cheesecake'
foods.push(newFood)
foodElement.innerHTML += `<br>${foods}`;
foods.shift()
foodElement.innerHTML += `<br>${foods}`;
foods.pop()
foodElement.innerHTML += `<br>${foods}`;
