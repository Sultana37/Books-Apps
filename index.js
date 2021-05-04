const getqutoes= () =>{
return fetch('https://got-quotes.herokuapp.com/quotes')
        .then(res => res.json())
}
getqutoes().then(console.log)


const changeRatingcolor = (quoteRating,ratinginput) => {

    if (ratinginput.value >= 8) {
     quoteRating.style.color ="green"
    }
    else if(ratinginput.value >= 4){
        quoteRating.style.color = "blue"
    }
     else{
    quoteRating.style.color ="red"
 }
  
}


const createQutoesDiv =(qutoes) => {
    const qutoescontainer = document.createElement('div')
    const quotescontainertitle=document.createElement('h2')
    const quote= document.createElement('p')
    const character= document.createElement('p')
    const quoteRating = document.createElement('p')
    const ratinginput =document.createElement('input')
    const ratingbtn = document.createElement('button')
    //const submitbtn = document.getElementById('submit-btn');
    //const sb = document.getElementById('search')


    quoteRating.id ="quote-rating"
    ratinginput.id ="quote-rating-input"
    quotescontainertitle.className="quote-container-title"

    quote.innerText = qutoes.quote
    character.innerText = qutoes.character
    quoteRating.innerText ='Rating : '
    ratingbtn.innerText ="Rate"
    quotescontainertitle.innerText="Perfect quotes for you!"

    ratinginput.type = "number"
    ratinginput.min = 1
    ratinginput.max =10

    ratingbtn.addEventListener('click',() =>{
    changeRatingcolor (quoteRating,ratinginput)
       
    })

   //submitbtn.addEventListener('submit',(e)=>{
   // e.preventDefault();
    //getcharacterqutoes(sb.value)
   
  // })

    qutoescontainer.append(quotescontainertitle,quote,character,quoteRating,ratinginput,ratingbtn,sb,btn)
    return qutoescontainer
}

const appendQuote = (quoteDiv) => {
    const quotescontainer = document.getElementById('quote-container')
    quotescontainer.innerHTML =""
    quotescontainer.append(quoteDiv)
   
}
const handleFetchError = ()=>{
    const quotescontainer =document.getElementById('quote-container')
    const warning =createElement('p')
    warning.innerText="something went wrong "

    quotescontainer.append(warning)
}
const generatequtoe = () =>{
  getqutoes().then((quotes) => {
  const quoteDiv = createQutoesDiv(quotes)
  appendQuote(quoteDiv)
  })
  .catch(handleFetchError)
}
const newQbutton = document.getElementById('n-q-btn')

newQbutton.addEventListener('click' , generatequtoe)

generatequtoe()
