// color collection 
const colors = ['#DAF7A6', '#566573', '#FF5733', '#2ecc71', '#3498db', '#8e44ad'];
const button = document.querySelector('button');
const body = document.querySelector('body');
const header = document.querySelector('h1');
var index = 0;

// body style 
body.style.backgroundColor = '#121212';

// header style 
header.style.backgroundColor = '#060606';
header.style.margin = 0;
header.style.padding = '20px 30px';
header.style.color= '#FFFFFF';


button.addEventListener('click', changeBackground);

function changeBackground(){
    header.style.backgroundColor = colors[index]
    body.style.backgroundColor = colors[index]
    index += 1; 
    index = (colors.length == index) ? 0 : index;
}