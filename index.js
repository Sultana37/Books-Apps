const getqutoes= () =>{
return fetch('https://got-quotes.herokuapp.com/quotes')
        .then(res => res.json())
}
getqutoes().then(console.log)

const createQutoesDiv =(qutoes) => {
    const qutoescontainer = document.createElement('div')
    const quote= document.createElement('p')
    const character= document.createElement('p')
    const quoteRating = document.createElement('p')
    const ratinginput =document.createElement('input')
    const ratingbtn = document.createElement('button')


    quoteRating.id ="quote-rating"
    ratinginput.id ="quote-rating-input"

    quote.innerText = qutoes.quote
    character.innerText = qutoes.character
    quoteRating.innerText ='Rating : '
    ratingbtn.innerText ="Rate"

    ratingbtn.addEventListener('click',() =>{
        quoteRating.innerText ='Rating : '+ ratinginput.value
    })

    qutoescontainer.append(quote,character,quoteRating,ratinginput,ratingbtn)
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
