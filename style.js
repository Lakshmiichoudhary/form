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

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = "blue";

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i =0; i < odd.length; i++){
    odd[i].style.backgroundColor = "green";
}


