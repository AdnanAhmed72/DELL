function saveToLocalStorage(event){
    event.preventDefault();
    const Expenseamount = event.target.amount.value;
    const Description = event.target.description.value;
    const Category = event.target.category.value;
    const obj = {
        Expenseamount,
        Description,
        Category
    };
    // localStorage.setItem(obj.Description,JSON.stringify(obj));
    // showOnScreen(obj);

    axios.post("https://crudcrud.com/api/c966b978fa414a5fa3d028c7db0022ab/AppData",obj)
        .then(res => showOnScreen(res.data))
        .catch(err => console.log(err))

    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/c966b978fa414a5fa3d028c7db0022ab/AppData')
        .then((response)=>{
            console.log(response)

            for(let i=0;i<response.data.length;i++){
                showOnScreen(response.data[i])
            }
        })
        .catch(err => console.log(err))
})
function showOnScreen(obj){
    var li = document.createElement('li');
    li.innerHTML = `${obj.Expenseamount} - ${obj.Description} - ${obj.Category}  `;
    parentEle = document.getElementById('listofitems');

    //Delete button
    let delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.value = 'Delete Expense';
    delBtn.onclick = () => {
        localStorage.removeItem(obj.Description);
        parentEle.removeChild(li);

        document.getElementById('amount').value = '';
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
    }

    li.appendChild(delBtn);

    parentEle.appendChild(li);

    //Edit button
    edBtn = document.createElement('input');
    edBtn.type = 'button';
    edBtn.value = 'Edit Expense';
    edBtn.onclick = () => {
        localStorage.removeItem(obj.Description);

        document.getElementById('amount').value = obj.Expenseamount;
        document.getElementById('description').value = obj.Description;
        document.getElementById('category').value = obj.Category;
        parentEle.removeChild(li)

    }
    li.appendChild(edBtn);


}