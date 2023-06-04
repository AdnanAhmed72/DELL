function saveToLocalStorage(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const userobj = {
        name,
        email,
        mobile
    }

    localStorage.setItem(userobj.email,JSON.stringify(userobj))
    //showOnScreen(obj)
    axios.post("https://crudcrud.com/api/7b366e02c5644691b6bfd156bf5ca73f/appointdata",userobj)
        .then(res => showOnScreen(res.data))
        .catch(err => console.log(err))
}



function showOnScreen(userobj){
    const parEle = document.getElementById('listOfUsers');
    const childHTML = `<li id=${userobj._id}>${userobj.name} --> ${userobj.email} --> ${userobj.mobile}
    <button onclick=deleteUser('${userobj._id}')>Delete User</button>
    <button onclick=EditUser('${userobj.name}','${userobj.email}','${userobj.mobile}','${userobj._id}')>Edit</button>
    </li>`

    parEle.innerHTML = parEle.innerHTML + childHTML

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
    // const childEle = document.createElement('li');
    // childEle.textContent = `${obj.name} --> ${obj.email} --> ${obj.mobile}`
    // parEle.appendChild(childEle)
    // delBtn = document.createElement('input')
    // delBtn.type='button'
    // delBtn.value = 'Delete'
    // childEle.appendChild(delBtn)
}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/7b366e02c5644691b6bfd156bf5ca73f/appointdata/${userId}`)
        .then(res => removeFromScreen(userId))
        .catch(err => console.log(err))
    
    //localStorage.removeItem(useremail)
}

function EditUser(oname,oemail,omobile,userId){
    document.getElementById('name').value = oname;
    document.getElementById('email').value = oemail;
    document.getElementById('mobile').value = omobile;
    deleteUser(userId)
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/7b366e02c5644691b6bfd156bf5ca73f/appointdata")
        .then((res) =>{
            for(let i =0;i<res.data.length;i++){
                showOnScreen(res.data[i])
            }
        }).catch(err => console.log(err))
})

function removeFromScreen(userId){
    parNode = document.getElementById('listOfUsers');
    childNode = document.getElementById(userId);
    parNode.removeChild(childNode)

}