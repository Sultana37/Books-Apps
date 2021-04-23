const getqutoes= () =>{
return fetch('https://got-quotes.herokuapp.com/quotes')
        .then(res => res.json())
}
getqutoes().then(console.log)