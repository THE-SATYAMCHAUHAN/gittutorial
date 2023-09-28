
// var itemall=document.getElementById('items');
// console.log(itemall) 
// itemall.style.fontWeight='bold'
// var items=document.getElementsByClassName('list-group-item');
// // console.log(items)
// console.log(items[0]);
// items[2].style.backgroundColor='green'


// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='red'
// }

//  GETELEMENTBYTAGNAME //

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);

// QUERYSELECTER //
//  var header =document.querySelector('#main-header');
//  header.style.borderBottom ='solid 4px black'


//  var input =document.querySelector('input');
//  input.value='hello'

//  var submit =document.querySelector('input[type="submit"]');
//  submit.value='send'

//  var item =document.querySelector('.list-group-item');
//  item.style.color='red'

//  var lastItem=document.querySelector('.list-group-item:last-child');
//  lastItem.style.color='blue'

//  var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//  secondItem.style.backgroundColor='blue'

//  var secondItem=document.querySelector('.list-group-item:nth-child(3)');
//  secondItem.style.color='white'

//  QUERYSELECTORALL //

// var titles=document.querySelectorAll('.title');
// console.log(titles)

// TRAVERSING THE DOM //

var itemlist=document.querySelector('#items');

// ParentNode //
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='pink'
console.log(itemlist.parentNode.parentNode.parentNode);

// ParentElement //
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='pink'
console.log(itemlist.parentElement.parentElement.parentElement);

// CHILDNODE //
// console.log(itemlist.childNodes);

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='red';

// firstchild //
console.log(itemlist.firstChild);

// firstelementchild //
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='hello1';


// lastelementchild //
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='hello4';

// NEXTSIBLING //

console.log(itemlist.nextSibling);

// nextelementsibling //

// previoussibling //

console.log(itemlist.previousSibling);

// previouselement sibling //
console.log(itemlist.previousElementSibling);

itemlist.previousElementSibling.style.color='orange' 

// createElement //

var newDiv=document.createElement('div');
//  add class
newDiv.className='hello';
// add id
newDiv.id='hello1'
// add attr
newDiv.setAttribute('title','Hello Div');
// create text node //

var newDivText=document.createTextNode('HEllo world');

// add text to div //
newDiv.appendChild(newDivText);

var container =document.querySelector('header .container');

var h1 =document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='20px'

container.insertBefore(newDiv,h1);

