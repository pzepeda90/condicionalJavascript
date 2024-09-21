document.addEventListener('DOMContentLoaded', () =>{
    const btn = document.querySelector('#btnLlevar')

    btn.addEventListener('click',() => {
        const s1 = parseInt(document.querySelector('#sticker1').value)
        const s2 = parseInt(document.querySelector('#sticker2').value)
        const s3 = parseInt(document.querySelector('#sticker3').value)

        const total = s1 + s2 + s3
        const stringTotal = string(total)

        if (total > 10) {
            alert ("Llevas demasiados stickers")
        } else if (total == 1) {
            alert("Llevas 1 sticker")
        } else {
            alert ("llevas" + stringTotal + "stickers.")
        }
    })
})