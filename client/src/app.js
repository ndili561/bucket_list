var state = {
  countries: null
}

window.onload = function(){
  var url = "https://restcountries.eu/rest/v1"
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
   if (request.status === 200) {
     var jsonString = request.responseText;
     var countries = JSON.parse(jsonString);
     state.countries = countries
     main(countries);
   }
 }
 request.send();

  var main = function(countries){
    add(countries)
    
 }

 var add = function(countries){
  var country = document.getElementById('add');
  countries.forEach(function(item,index){
    item.index = index;
    var option = document.createElement('option');
    option.value = index;
    option.text = item.name;
    country.appendChild(option);
  
  })
  var button = document.getElementById('button');
  button.onclick = function (event){
    var selector = document.getElementById('add')
    event.preventDefault();
    save(state.countries[selector.value]);
   } 
  
  var save = function(country){
   var url = 'http://localhost:3000/bucket';
   var request = new XMLHttpRequest();
   request.open('POST', url);
   request.setRequestHeader('Content-Type', 'application/json');
   request.onload = function(){
    if (request.status === 200){
     console.log('request 200:',country)
    }
   }
   request.send(JSON.stringify(country))
  }
 }
};


