const cardArray = [
  {
    name: "brontosaurus",
    img: "https://img.freepik.com/free-vector/brontosaurus-cartoon_119631-248.jpg",
  },
  {
    name: "triceratops",
    img: "https://i.pinimg.com/originals/b3/5f/d0/b35fd0028292ea5dafee7c829808bd6b.png",
  },
  {
    name: "ceratosaurus",
    img: "https://media.sciencephoto.com/f0/23/50/49/f0235049-800px-wm.jpg",
  },
  {
    name: "carchorodontosaurus",
    img: "https://static.turbosquid.com/Preview/2020/10/20__08_44_13/Carcharodontosaurus_poses0083.jpg5B9FD3CE-0A18-4747-8B98-4F73ECC44691Large.jpg",
  },
  {
    name: "atrociraptor",
    img: "http://blog.everythingdinosaur.co.uk/wp-content/uploads/2019/03/Atrociraptor2.jpg",
  },
  {
    name: "pyroraptor",
    img: "https://i.kym-cdn.com/photos/images/original/002/344/241/13b.jpeg",
  },

  {
    name: "brontosaurus",
    img: "https://img.freepik.com/free-vector/brontosaurus-cartoon_119631-248.jpg",
  },
  {
    name: "triceratops",
    img: "https://i.pinimg.com/originals/b3/5f/d0/b35fd0028292ea5dafee7c829808bd6b.png",
  },
  {
    name: "ceratosaurus",
    img: "https://media.sciencephoto.com/f0/23/50/49/f0235049-800px-wm.jpg",
  },
  {
    name: "carchorodontosaurus",
    img: "https://static.turbosquid.com/Preview/2020/10/20__08_44_13/Carcharodontosaurus_poses0083.jpg5B9FD3CE-0A18-4747-8B98-4F73ECC44691Large.jpg",
  },
  {
    name: "atrociraptor",
    img: "http://blog.everythingdinosaur.co.uk/wp-content/uploads/2019/03/Atrociraptor2.jpg",
  },
  {
    name: "pyroraptor",
    img: "https://i.kym-cdn.com/photos/images/original/002/344/241/13b.jpeg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const result = document.querySelector('#result')

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute(
      "src",
      "https://s3.tmimgcdn.com/800x0/templates/24863/scr/1590196657449_1.jpg"
    );
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];


  if ( optionOneId == optionTwoId ) {
    alert('you clicked the same card')
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("you fund a match");
   
    // cards[cardsChosenIds[0]].setAttribute(
    //   "src",
    //   "https://s3.tmimgcdn.com/800x0/templates/24863/scr/1590196657449_1.jpg"
    // );
    // cards[cardsChosenIds[1]].setAttribute(
    //   "src",
    //   "https://s3.tmimgcdn.com/800x0/templates/24863/scr/1590196657449_1.jpg"
    // );

    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', "https://s3.tmimgcdn.com/800x0/templates/24863/scr/1590196657449_1.jpg")
    cards[optionTwoId].setAttribute('src', "https://s3.tmimgcdn.com/800x0/templates/24863/scr/1590196657449_1.jpg")
  }

  cardsChosen = [];
  cardsChosenIds = [];
  result.innerHTML = cardsWon.length;

  if( cardsWon.length == cardArray.length / 2 ) {
    result.innerHTML = "conrgatulationss"
  }

}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  let cardName = cardArray[cardId].name;
  cardsChosen.push(cardName);
  cardsChosenIds.push(cardId);
  console.log(cardsChosenIds);
  console.log(cardsChosen);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
