function savetob(event){
    event.preventDefault();
    const price = event.target.price.value;
    const dish = event.target.dish.value;
    const tab = event.target.table.value;

    const obj = {
        price,
        dish,
        tab
    }

    axios.post("https://crudcrud.com/api/436b7542f701417da197e5ce9f53bd54/orders",obj)
        .then(res => showOnScreen(res.data))
        .catch(err => console.log(err))
}

function showOnScreen(obj){
    if(obj.tab === 'table1'){
        parEle = document.getElementById('t1')
        childHTML = `<li id=${obj._id}>${obj.dish} --> ${obj.price}
        <button onclick=deleteUser('${obj._id}','${obj.tab}')>Delete Order</button></li>`
        parEle.innerHTML = parEle.innerHTML + childHTML
    }else if(obj.tab === 'table2'){
        parEle = document.getElementById('t2')
        childHTML = `<li id=${obj._id}>${obj.dish} --> ${obj.price}
        <button onclick=deleteUser('${obj._id}','${obj.tab}')>Delete Order</button></li>`
        parEle.innerHTML = parEle.innerHTML + childHTML
    }else{
        parEle = document.getElementById('t3')
        childHTML = `<li id=${obj._id}>${obj.dish} --> ${obj.price}
        <button onclick=deleteUser('${obj._id}','${obj.tab}')>Delete Order</button></li>`
        parEle.innerHTML = parEle.innerHTML + childHTML
    }
    
}


function deleteUser(userId,otab){
    axios.delete(`https://crudcrud.com/api/436b7542f701417da197e5ce9f53bd54/orders/${userId}`)
        .then(res => removeFromScreen(userId,otab))
        .catch(err => console.log(err))
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/436b7542f701417da197e5ce9f53bd54/orders")
        .then((res) =>{
            for(let i=0;i<res.data.length;i++){
                showOnScreen(res.data[i]);
            }
        })
        .catch(err => console.log(err));
})


function removeFromScreen(userId,otab){
    if(otab === 'table1'){
        parNode = document.getElementById('t1')
        childNode = document.getElementById(userId)
        parNode.removeChild(childNode)
    }else if(otab === 'table2'){
        parNode = document.getElementById('t2')
        childNode = document.getElementById(userId)
        parNode.removeChild(childNode)
    }else{
        parNode = document.getElementById('t3')
        childNode = document.getElementById(userId)
        parNode.removeChild(childNode)
    }
}