let img = document.getElementById("image");
let createBtn = document.getElementById("createBtn");
let inputContent = document.getElementById("content");

createBtn.onclick = () => {
    if(inputContent.value == '') return;

    let qrLink = 'https://api.qrserver.com/v1/create-qr-code/';
    img.src = qrLink + '?size=500x500&data=' + inputContent.value
}