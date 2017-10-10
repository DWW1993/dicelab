let got = [
    {
        id: 1,
        family: "stark",
        name: "sansa",
        image: "http://geekyapar.com/wp-content/uploads/2017/07/Sansa-Stark-e1501162324631-300x300.jpg"
    },
    {
        id: 2,
        family: "stark",
        name: "arya",
        image: "http://img5.zergnet.com/1930154_300.jpg"
    },
    {
        id: 3,
        family: "stark",
        name: "ned",
        image: "https://pbs.twimg.com/profile_images/723573953155866624/zmWVoV1o_400x400.jpg"
    },
    {
        id: 4,
        family: "lannister",
        name: "jamie",
        image: "http://static.dnaindia.com/sites/default/files/styles/square/public/2016/03/27/442206-jaime-lannister.jpg"
    },
    {
        id: 5,
        family: "lannister",
        name: "cersei",
        image: "http://media.npr.org/assets/img/2016/06/27/cersei_sq-86cfd3a29813c62371d78e605199094e520e6db5-s300-c85.jpg"
    },
    {
        id: 6,
        family: "lannister",
        name: "tyrion",
        image: "https://www.earnthenecklace.com/wp-content/uploads/2016/05/Tyrion-Lannister-Quotes-in-Game-of-Thrones-300x300.jpg"
    },
    {
        id: 7,
        family: "targaryen",
        name: "daenerys",
        image: "http://static.dnaindia.com/sites/default/files/styles/square/public/2017/07/22/594831-emilia-clarke-as-daenerys-targaryen-in-a-still-from-episode-1-of-got-s7-2.jpg"
    },
    {
        id: 8,
        family: "stark",
        name: "jon",
        image: "https://www.thesun.co.uk/wp-content/uploads/2017/08/nintchdbpict0003465565161.jpg?strip=all&w=960"
    },
    {
        id: 9,
        family: "targaryen",
        name: "ygritte",
        image: "http://img.wennermedia.com/920-width/rs-137244-f8e1f39b439e488f2c6060e1d5be01226a438a2c.jpg"
    },
    {
        id: 10,
        family: "targaryen",
        name: "petyr",
        image: "https://vignette2.wikia.nocookie.net/villains/images/4/4d/Petyr-baelish-1024.jpg/revision/latest?cb=20130725213903"
    },
    {
        id: 11,
        family: "tyrell",
        name: "margaery",
        image: "https://i.ytimg.com/vi/iRoX3-dAja4/maxresdefault.jpg"
    }
];

//here is an array to keep track of your objects
let characterArray = [];

//here is what you want on page load
document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    button.innerText = 'Generate Character';
    button.addEventListener('click', function() {
        //remember you need to call your constructor function with the new keyword that way it creates an object for you
        characterArray.push(new Character());
    });
    document.body.appendChild(button);
});

//here is your constructor
function Character() {
    this.div = document.createElement('div');
    this.div.className = 'character';

    this.info = getRandom();

    this.div.style.backgroundImage = `url(${this.info.image})`;
    this.div.addEventListener('click', this.change.bind(this));
    document.body.appendChild(this.div);
}

function getRandom() {
    return got[Math.floor(Math.random() * got.length)];
}

//all the methods you want each of your objects to be able to call should be on the prototype
Character.prototype.change = function() {
    let randomCharacter = getRandom();

    while (randomCharacter.family !== this.info.family) {
        randomCharacter = getRandom();
    }

    this.div.style.backgroundImage = `url(${randomCharacter.image})`;
};

//four things that happen when you call a function with the new keyword
//1. a new object is created
//2. that object is prototype linked to <Constructor function name>.prototype
//3. the newly created object is used as the `this` keyword of the function call
//4. the newly created object is returned

//Hints
//1. the roll all and sum functions do not have to be on the prototype... although they can be if you want