const getqutoes= () =>{
return fetch('https://got-quotes.herokuapp.com/quotes')
        .then(res => res.json())
}
getqutoes().then(console.log)

const createQutoesDiv =(qutoes) => {
    const qutoescontainer = document.createElement('div')
    const quotescontainertitle=document.createElement('h3')
    const quote= document.createElement('p')
    const character= document.createElement('p')
    const quoteRating = document.createElement('p')
    const ratinginput =document.createElement('input')
    const ratingbtn = document.createElement('button')


    quoteRating.id ="quote-rating"
    ratinginput.id ="quote-rating-input"
    quotescontainertitle.className="q-container"

    quote.innerText = qutoes.quote
    character.innerText = qutoes.character
    quoteRating.innerText =' Whats your Rating : '
    ratingbtn.innerText ="Rate"
    quotescontainertitle.innerText="The place where you can find the perfect quotes for you!"

    ratinginput.type = "number"
    ratinginput.min = 1
    ratinginput.max =10

    ratingbtn.addEventListener('click',() =>{
        quoteRating.innerText ='Whats your Rating: '+ ratinginput.value
    })

    qutoescontainer.append(quotescontainertitle, quote,character,quoteRating,ratinginput,ratingbtn)
    return qutoescontainer
}

const appendQuote = (quoteDiv) => {
    //take in a quotediv
    //grab a hold of quotes container
    //append it to the quotescontainer 
    const quotescontainer = document.getElementById('quote-container')
    quotescontainer.innerHTML =""
    quotescontainer.append(quoteDiv)
   
}
const generatequtoe = () =>{
  getqutoes().then((quotes) => {
  const quoteDiv = createQutoesDiv(quotes)
  appendQuote(quoteDiv)
  })
}
const newQbutton = document.getElementById('n-q-btn')

//console.log(newQbutton)
newQbutton.addEventListener('click' , generatequtoe)

generatequtoe()
