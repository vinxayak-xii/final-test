
var selected = document.querySelector(".selected");
const trigger = document.querySelector('#pixelbtn');
const modalWrapper = document.querySelector('.modal__wrapper');
trigger.addEventListener('click', async function(){
    if (selected.textContent == 'Quantity'){
        alert("Error: Quantity cannot be empty")
        return;
    }
    openModal();
    const numb = selected.textContent;
    console.log(numb);
    const api_url = 'mint/'+numb;
    const response = await fetch(api_url);
    const  add = await response.json();
    if (add.paymentAddress == undefined){
        document.getElementById('modalPara').textContent = add.errorMessage;
        document.getElementById('modalHead').innerText = "crap!";
        document.getElementById('min20').style.display = "none";
        return;
    }
    document.getElementById('addressInput').value = add.paymentAddress;
    document.getElementById('adaInput').textContent =add.adaToSend;
});

function openModal() {
    modalWrapper.classList.add('modalactive');
}

function copy(){
    var copyText = document.getElementById("addressInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);
}

