const cardArray = [ 
    {
        name: 'fries',
        img: 'images/fries image.jpeg'
    },
    {
        name: 'cheesburger',
        img: 'images/hamburger-cheeseburger.webp',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpeg'
    },
    {
        name: 'cake',
        img: 'images/cake.jpeg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg'
    },
    {
        name: 'fries',
        img: 'images/fries image.jpeg'
    },
    {
        name: 'cheesburger',
        img: 'images/hamburger-cheeseburger.webp',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpeg'
    },
    {
        name: 'cake',
        img: 'images/cake.jpeg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg'
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
let cardChosen = []
let cardChosenId = []
const cardWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src' , 'images/white.jpeg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridDisplay.appendChild(card)  
    }
}
createBoard()

function checkMatch() {
    const card = document.querySelectorAll('img')
    const optionOneId =  cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    console.log(card)
    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!')
    }
    if (cardChosen[0] == cardChosen[1]) {
        alert('You Found a Match!')
        card[optionOneId].setAttribute('src','images/pattern.jpeg')
        card[optionTwoId].setAttribute('src','images/pattern.jpeg')
        card[optionOneId].removeEventListener('src', flipCard)
        card[optionTwoId].removeEventListener('src', flipCard) 
        cardWon.push(cardChosen)
    } else {
        card[optionOneId].setAttribute('src', 'images/pattern.jpeg')
        card[optionTwoId].setAttribute('src', 'images/pattern.jpeg')
        alert('Sorry try again!')
    }
resultDisplay.textContent = cardWon.length
    cardChosen = []
    cardChosenId = []

    if (cardWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulationa! You/`ve won'

    }

}
function  flipCard() {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    console.log(cardChosen)
    console.log(cardChosenId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.lebgth === 2) {
        setTimeout(checkMatch, 500)
    }
}