const firstNames = ["Beholder", "Anão", "Elfo", "Orc", "Kua-Toa", "Bárbaro", "Lich", "Ninfa", "Unicórnio", "Pergaminho", "Javalí", "Mendigo", "Dragonete", "Bardo", "Bruxa", "Dragão", "Urso", "Elemental", "Peixe", "Tolo"];

const secondNames = ["O bom", "Cabeça de","O descanso do", "Os irmãos", "Filha de", "Olho de", "Tesouro do", "Banquete dos", "A Fera e o", "A lenda dos", "Covil dos", "A espada do", "O devorador de", "Caldeirão do", "Barriga de", "A princesa e o", "Os treze", "Taverna do", "Punho de", "Amigo dos"];

const thirdNames = ["Caolho", "Bêbado", "Sorridente", "Fiel", "Flatulento", "Ancião", "Perigoso", "Morto-vivo", "Prometido", "Perfumado", "Encantado", "Gordo", "Tarado", "Furioso", "Brigão", "Cantante", "Ferido", "Exausto", "Eterno", "Cotoco"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName1 = () =>
    `${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]}`;

    const getRandomName2 = () =>
    `${firstNames[getRandomNumber(firstNames.length)]} ${thirdNames[getRandomNumber(thirdNames.length)]}`;

    const getRandomName3 = () =>
    `${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]} ${thirdNames[getRandomNumber(thirdNames.length)]}`;


const setRandomName1 = () => {
    document.getElementById('random-name').innerText = getRandomName1();
}

const setRandomName2 = () => {
    document.getElementById('random-name').innerText = getRandomName2();
}

const setRandomName3 = () => {
    document.getElementById('random-name').innerText = getRandomName3();
}


document.getElementById('generate1')
    .addEventListener('click', setRandomName1);

    document.getElementById('generate2')
    .addEventListener('click', setRandomName2);

    document.getElementById('generate3')
    .addEventListener('click', setRandomName3);

setRandomName();
