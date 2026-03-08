// login and password
const userInput = document.querySelector('#user');
const passInput = document.querySelector('#Password');
const logIn = document.getElementById('submitBtn')
document.getElementById('submitBtn').addEventListener('click',function(){
   if (userInput.value==='admin' && passInput.value==='admin123') {
    logIn.innerText = 'Logged In';
    setTimeout(function () {
        
        window.location.replace('home.html');  
    },2000)
   } else {
    document.getElementById('error').classList.remove('hidden')
   }
});