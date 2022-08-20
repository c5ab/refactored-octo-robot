const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;
generateBtn.addEventListener('click',()=>{
    let qrvalue = qrInput.value
qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170×170&data=${qrvalue}`   
 wrapper.classList.add('active')
})