let element = document.querySelector(".element");

let colorArr = ["green", "yellow", "blue", "grey"];

let i = 0;

setInterval(() => {
  if (i < colorArr.length) {
    element.style.backgroundColor = colorArr[i];
    i = i + 1;
    i = i % colorArr.length;
  }
}, 2000);

let telementbody = document.querySelector("tbody");

let objets = [
  {
    name: "Jafar",
    surname: "Nuriyev",
  },

  {
    name: "Kenan",
    surname: "Mahmudov",
  },

  {
    name: "Allaverdi",
    surname: "Hemidov",
  },

  {
    name: "Gulcohre",
    surname: "Qafarova",
  },
];
let index = 0;
let id = 1;

setInterval(() => {
  if (id <= objets.length) {
    let trelemet = document.createElement("tr");
    let tdelemet = document.createElement("td");
    tdelemet.innerHTML = ` ${objets[index].name}`;
    let tdelemet1 = document.createElement("td");
    tdelemet1.innerHTML = ` ${objets[index].surname}`;
    let tdelemet2 = document.createElement("td");
    tdelemet2.innerHTML = `${id}`;
    trelemet.append(tdelemet, tdelemet1, tdelemet2);
    telementbody.append(trelemet);
    id++;
    index++;
  }
}, 2000);
