// Add your code here
function submitData(){
  
  let userData = {
    name: "Steve",
    email:"steve@steve.com"
  };
  
  let configFunc = {
   method: 'POST',
   headers:{
    'Content-Type':'application/json',
    'Accept':'application/json'
   },
    body: JSON.stringify(userData)
  };
  
 return fetch("http://localhost:3000/users", configFunc)
 .then(function(response){
   return response.json();
 })
 
 .then(function(json){
  consle.lo
   
 })
 
}
submitData();