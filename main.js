

function createCard(imageUrl, nameLasName, agess, cityLocation, emails) {
    let img = document.createElement("img");
    img.className = "img";
    img.src = imageUrl;

    let nameSurname = document.createElement("p");
    nameSurname.className = "name";
    nameSurname.textContent = nameLasName;

    let age = document.createElement("p");
    age.textContent = agess;

    let city = document.createElement("p");
    city.textContent = cityLocation;

    let email = document.createElement("p");
    email.textContent = emails;

    let newCard = document.createElement("div");
    newCard.className = "user-profile";

    let newDescription = document.createElement("div");
    newDescription.className = "description"
    newDescription.append(age, city, email);

    newCard.append(img, nameSurname, newDescription);
    return newCard;
}







function appendCard(card) {
    let parent = document.querySelector("main");
    //let card = createCard(foto, vardas, amzius, miestas, elPastas);
    parent.append(card);

    //     let foto = "https://pickaface.net/gallery/avatar/66961165_171026_2019_co0p.png";
    //     let vardas = "Antanas Antanavicius";
    //     let amzius = "Agre: 39";
    //     let miestas = "City: Vilnius";
    //     let elPastas = "antanas.antanavicius@pvz.lt";

}

async function getData() {
    const requestURL = 'https://randomuser.me/api/';
    const request = new Request(requestURL);
    const response = await fetch(request,);
    const data = await response.json();
    // Pasitikrinimui
    // console.log(data.results[0].email);
    // console.log(data.results[0].location.city);
    // console.log(data.results[0].location.street.name);
    // console.log(data.results[0].name.first + " " + data.results[0].name.last);

    console.log(data);
    return data;
}

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    getData().then(data => {
        let { picture, name, dob, location, email } = data.results[0];
        picture = picture.large;
        name = `${name.first} ${name.last}`;
        dob = dob.age;
        location = location.city;
        email = email;
        //createCard(imageUrl, nameLasName, agess, cityLocation, emails)
        let card = createCard(picture, name, dob, location, email);
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})