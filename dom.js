
var itemall=document.getElementById('items');
console.log(itemall) 
itemall.style.fontWeight='bold'
var items=document.getElementsByClassName('list-group-item');
// console.log(items)
console.log(items[0]);
items[2].style.backgroundColor='green'


// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='red'
// }

//  GETELEMENTBYTAGNAME //

var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);

