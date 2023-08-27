//var items = document.getElementsByTagNameNS('list-group-item');
//console.log(items);
//console.log(items[2]);
//items[2].style.backgroundColor = "green";

//for(var i = 0;i < items.length;i++){
    //items[i].style.fontWeight = 'bold';
//}

//by getElementByClassname
//var listItems = document.getElementsByClassName('list-group-item');

//var newLi = document.createElement('li');
//newLi.textContent = 'New Item';


//listItems[0].parentNode.appendChild(newLi);

//by getElementById
//var list = document.getElementById('items');
//var listItems = list.getElementsByTagName('li');


//var newLi = document.createElement('li');
//newLi.textContent = 'New Item';


//list.appendChild(newLi);

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = "blue";

//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i =0; i < odd.length; i++){
    //odd[i].style.backgroundColor = "green";
//}

//parentNode
//var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = "grey"
//console.log(itemList.parentNode.parentNode.parentNode);

//childrenNode
//console.log(itemList.childNode);

//childrenNode
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = "red";

//console.log(itemList.lastChild);

//nextsibling
//console.log(itemList.nextSiblings);
//nextelement
//console.log(itemList.nextElementSibiling);

//previoussibling
//console.log(itemList.previousSiblings);
//previouselement
//console.log(itemList.previousElementSibiling);
//item.previousElementSibiling.style.color = 'green';

var newDiv = document.createElement('div');
newDiv.className = "Hello";  
newDiv.id = 'Hello';
newDiv.setAttribute('title', 'hello div');
var newDivText = document.createTextNode('hello');
newDiv.appendChild(newDivText);

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);