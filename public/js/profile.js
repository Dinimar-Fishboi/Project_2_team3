const inputText = document.querySelector('#txt');
const myButtons = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');

myButtons.addEventListener('click',(e)=>{
  
    if(inputText.value != ""){
         e.preventDefault();

        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Put";
        myLi.appendChild(btn);
        var btn2 = document.createElement("BUTTON");
        btn2.innerHTML = "Delete";
        myLi.appendChild(btn2);
    }

    btn2.onclick = function(evt){
        evt.target.parentElement.remove();
    }

    btn.onclick = function (evt) {
     window.location.href = "put.html";
    }

    inputText.value="";
})