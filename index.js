const getqutoes= () =>{
  return fetch('https://got-quotes.herokuapp.com/quotes')
          .then(res => res.json())
  }
  getqutoes().then(console.log)
  
  
  const changeRatingcolor = (quoteRating,ratinginput) => {

      // //////////////////// ADDED //////////////////////////////////
      try { 
          if(ratinginput.value == "")  throw "empty";
          if(isNaN(ratinginput.value)) throw "Not a number";
          x = Number(ratinginput.value);
          if(x < 0)  throw "Invalid rating number too low";
          if (x > 10) throw " Invalid rating number too high";

        }
        
      
        catch(err) {
          alert(err);
        }
        //////////////////////  ///////////////////////////////////
        if (ratinginput.value >= 8) {
          quoteRating.style.color ="green"
         }
         else if(ratinginput.value >= 4){
             quoteRating.style.color = "blue"
         }
          else{
         quoteRating.style.color ="black"
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
      quoteRating.innerText ='❣❣ Give Your Rating ❣❣'
      ratingbtn.innerText ="Rate"
      quotescontainertitle.innerText="🎁🎁 Perfect quotes for you!"
  
      ratinginput.type = "number"
      ratinginput.min = 1
      ratinginput.max =10
  
      ratingbtn.addEventListener('click',() =>{
      changeRatingcolor (quoteRating,ratinginput)
         
      })
  
      qutoescontainer.append(quotescontainertitle,quote,character,quoteRating,ratinginput,ratingbtn)
      return qutoescontainer
  }
  
  const appendQuote = (quoteDiv) => {
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
  
  newQbutton.addEventListener('click' , generatequtoe)
  
  generatequtoe()

    ////////////////// ADDED ///////////////////////////
    function getallcharacterquote (char) {

    
      return fetch('https://got-quotes.herokuapp.com/quotes?char=${char}')
      .then(res => res.json())

     .then(data => {
     
              let quot= document.createElement('p')
              let charac= document.createElement('p')
              const quotecontainer = document.getElementById('quote-container2');
              quot = data.quote;
              charac = data.charac;
              alert(data.quote)
              quotecontainer.append(quot);

      })
      }

      let val = document.querySelector('#quotechar');
      let search = document.querySelector('#checkbar');
      const quotecontainer = document.getElementById('quote-container2');
      //search.innerHTML = "Search"
      val.setAttribute("type", "search");
      quotecontainer.appendChild(val);
      quotecontainer.appendChild(search);
  
  
      search.addEventListener('click',() =>{
  
          getallcharacterquote(val.value)
      })

      //document.querySelector('#checkbar').addEventListener('click', function(){
     //alert(document.querySelector('#quotechar').value);

     // })s
