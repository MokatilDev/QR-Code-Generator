const btn = document.querySelector("button")
const imgQR = document.querySelector(".imgQR")
const img = document.querySelector("img")


const input = document.querySelector("input")

btn.addEventListener("click",()=>{
    img.classList.add("active")
    btn.textContent = 'Generating QR Code...'
    imgQR.classList.add("active")
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$${input.value}`
})

input.addEventListener("input",()=>{
    if(input.value.trim() != ""){ 
        btn.removeAttribute("disabled")
        btn.style.cursor = "pointer"
        img.addEventListener("load",()=>{
            btn.textContent = 'Generate QR Code'

        })
    }else{
        img.src = ""
        btn.setAttribute("disabled","")
        btn.style.cursor = "not-allowed" 
        img.classList.remove("active")
        imgQR.classList.remove("active")
    }
})

