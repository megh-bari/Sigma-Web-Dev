/* Create a business name generator by combining list of adjecrives and shop name and another word

Adjecctives:
Crazy
Amazing
Fire

Shope Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

function getRandomAdjective() {
    const randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0) {
        return "Crazy";
    } else if (randomNumber === 1) {
        return "Amazing";
    } else {
        return "Fire";
    }
}

function getRandomShopName() {
    const randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0) {
        return "Engine";
    } else if (randomNumber === 1) {
        return "Foods";
    } else {
        return "Garments";
    }
}

function getRandomAnotherWord() {
    const randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0) {
        return "Bros";
    } else if (randomNumber === 1) {
        return "Limited";
    } else {
        return "Hub";
    }
}

function generateBusinessName() {
    const adjective = getRandomAdjective();
    const shopName = getRandomShopName();
    const anotherWord = getRandomAnotherWord();
    return adjective + " " + shopName + " " + anotherWord;
}

const businessNameElement = document.getElementById("businessName");

businessNameElement.textContent = generateBusinessName();
