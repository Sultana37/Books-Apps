const getqutoes= () =>{
return fetch('https://got-quotes.herokuapp.com/quotes')
        .then(res => res.json())
}
getqutoes().then(console.log)

const createQutoesDiv =(qutoes) => {
    const qutoescontainer = document.createElement('div')
    const quote= document.createElement('p')
    const character= document.createElement('p')
    quote.innerText = qutoes.quote
    character.innerText = qutoes.character

    qutoescontainer.append(quote,character)
    return qutoescontainer
}

const appendQuote = (quoteDiv) => {
    //take in a quotediv
    //grab a hold of quotes container
    //append it to the quotescontainer 
    const quotescontainer = document.getElementById('quote-container')
    quotescontainer.append(quoteDiv)
   
}

getqutoes().then((quotes) => {
 const quoteDiv = createQutoesDiv(quotes)
 appendQuote(quoteDiv)
})