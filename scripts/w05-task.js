/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples')
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let articleElement = document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        let imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    }
    )
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
        templeList = await response.json();
    }
    displayTemples(templeList);
}

/* reset Function */

function reset() {
    templesElement.innerHTML = '';
}

/* filterTemples Function */

function filterTemples(temples) {
    reset();
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => {
                let year = parseInt(temple.dedicated.split(',')[0])
                if (year < 1950) {
                    return true
                };
            }));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templeList) })