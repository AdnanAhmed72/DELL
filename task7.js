var itemList = document.querySelector('#items');
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#f4f4f4'

itemList.parentElement.style.backgroundColor = '#f4f4f4'
console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].style.backgroundColor='yellow';
console.log(itemList.firstChild);
itemList.firstElementChild.textContent='Hello1';
//lastChild
console.log(itemList.lastChild);
//lastElementChild
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement

//create a div
var newDiv = document.createElement('div');
//Add class
newDiv.className='hello1'
//Add ID
newDiv.id = 'hello2'
//Add attribute
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDIvText = document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDIvText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv)

newDiv.style.fontSize='30px'

container.insertBefore(newDiv,h1);


