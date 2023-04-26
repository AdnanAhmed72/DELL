var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;
    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add txt node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + description));

    //create delete button
    var delbtn = document.createElement('button');
    //add class
    delbtn.className='btn btn-danger btn-sm float-right delete'
    //add text node
    delbtn.appendChild(document.createTextNode('X'));
    //append btn to li
    li.appendChild(delbtn);
    //append li to list
    itemList.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    //get all li s
    var items = document.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}