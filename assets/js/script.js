const clickeado = document.querySelector("#imagenId");
        let bordeVisible = false;

        clickeado.addEventListener('click', borde);

        function borde(){
            if (!bordeVisible){ 
                clickeado.style.border = "2px solid red"
            }else{
                clickeado.style.border = "none"
            }
            bordeVisible = !bordeVisible;
        }   

function llevar() {

    const s1 = parseInt(document.getElementById('sticker1').value)
    const s2 = parseInt(document.getElementById('sticker2').value)
    const s3 = parseInt(document.getElementById('sticker3').value)
    
    let total = 0
            
    if (!isNaN (s1)) {total += s1}
    if (!isNaN (s2)) {total += s2}
    if (!isNaN (s3)) {total += s3}
    
    const stringTotal = total.toString()
    
    console.log(`Valores seleccionados: ${s1}, ${s2}, ${s3}`);
    
    if (total > 10) {
        alert ("Llevas demasiados stickers")
    } else if (total == 1) {
        alert("Llevas 1 sticker")
    } else {
        alert ("Llevas " + stringTotal + " stickers.")
    }
        }

        function comprobarPassword () {
            const digito1 = parseInt(document.getElementById('select1').value)
            const digito2 = parseInt(document.getElementById('select2').value)
            const digito3 = parseInt(document.getElementById('select3').value)

            console.log(`Valores seleccionados: ${digito1}, ${digito2}, ${digito3}`);

            if (digito1 === 9 && digito2 === 1 && digito3 === 1) {
                 alert("Password 1 Correcto");
             } else if (digito1 === 7 && digito2 === 1 && digito3 === 4) {
                    alert("Password 2 Correcto");
             }else {
                 alert("Password Incorrecto");
             }
        }