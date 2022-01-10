/*
jsonData = null;
awaitfetch('creations/creations.json')
    .then((response) => {
        jsonData = response.json();
        return response.json();
    })

console.log(jsonData);
*/

// Async calls to get data that i hate
async function getCreations() {
    let url = 'creations/creations.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getCreationInfo(name) {
    let url = 'creations/creations/' + name + '/info.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function loadCreations() {
    let data = await getCreations();
    creations = data["creations"];
    totalCreationNumber = creations.length;
    creations.forEach(creation => {
        console.log(addCreation(creation));
    });
}

async function addCreation(name) {
    let creationData = await getCreationInfo(name);
    allCreationData.push(creationData);
    creationsLoaded += 1;
    listCreations();
    return creationData;
    console.log(creationData);
}

// Create Display
totalCreationNumber = -1;
creationsLoaded = 0;
allCreationData = [];
function listCreations() {
    if (creationsLoaded >= totalCreationNumber) {
        console.log(allCreationData);
        allCreationData.forEach(creation => {
            // Get Object Holder
            const holder = document.getElementById("creationHolder");

            // Create Link
            link = document.createElement("a");

            textNode = document.createTextNode(creation["name"]);
            link.appendChild(textNode);

            link.setAttribute("href",creation["link"]);

            holder.appendChild(link);

            // Add Img
            image = document.createElement("img");

            image.setAttribute("src",creation["icon_path"]);

            link.appendChild(image);

            // Add Break
            breakElem = document.createElement("br");
            holder.appendChild(breakElem);
        });
    }
}

loadCreations();

/*
var obj;

fetch('creations/creations.json')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))

console.log(obj);
*/