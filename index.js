var url = "https://api.chucknorris.io/jokes/random";
var quote = document.getElementById("quote")
axios.get(url)
.then(function (response) {
    // handle success
    var joke = response.data.value
    console.log(joke)
    quote.innerHTML=joke
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
 