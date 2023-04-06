let form = document.getElementById('addForm');
let  itemList= document.getElementById('items');
let filter =document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);
// Filter event 
filter.addEventListener('keyup',filterItems);

//add Item

function addItem(e){
    e.preventDefault();


    // get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    //add class
    li.className= 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create Del button element
    var deleteBtn = document.createElement('button');

    // add classes
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li 
    li.appendChild(deleteBtn);

    itemList.appendChild(li); 


    //Create an Edit Button
    let editButton = document.createElement('button');

    //Add Classes to edit Button
    editButton.className = 'btn btn-danger btn-sm float-right delete';

    //Append Text Node
    editButton.appendChild(document.createTextNode('EB'));

    //Append button to Li
    li.appendChild(editButton);

    itemList.appendChild(li);
}

//function remove item 

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }


}


//funtion filter items

function filterItems(e){
    //converts text to lowercase
    let text =e.target.value.toLowerCase();
    // Get lis
    let items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){ 
        var  itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}