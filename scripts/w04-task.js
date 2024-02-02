/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Nathan Egbert",
    photo: {
        src: "images/photo.jpg",
        alt: "Profile Picture"
    },
    favoriteFoods: ["Sushi", "Pizza", "Biscuits and Gravy", "Naan Bread"],
    hobbies: ["Drawing", "Programming", "Reading", "Video Games", "Animating"],
    placesLived: {
        places: ["California", "Colorado", "Ohio"],
        length: ["1 year", "14 years", "3 years"]
    }
};


/* Populate Profile Object with placesLive objects */

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").innerHTML = `My name is <em>${myProfile.name}</em>`;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li")
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li")
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

for (let item = 0; item < myProfile.placesLived.places.length; item++) {
    let dt = document.createElement("dt")
    dt.textContent = myProfile.placesLived.places[item];
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd")
    dd.textContent = myProfile.placesLived.length[item];
    document.querySelector("#places-lived").appendChild(dd);
}