/* Task 1 */
 
var ta1 = document.getElementById('heading');
console.log(ta1.innerText);

/* Task 2 using plain JavaScript */
function addTexts(){
    var task2div = document.getElementById('task2a');
    var para = document.createElement('p');
    para.innerText="Hello World!";
    task2div.appendChild(para);
}

function changeColor(newColor) {
  var color = document.getElementsByTagName('body')[0];
  color.style.backgroundColor = newColor;
}


function Redirect(){
    window.location.href = "https://www.google.com/";
    
}
var Google = document.getElementById('Google');
Google.addEventListener('click',Redirect);


/* Task 4 using jQuery */