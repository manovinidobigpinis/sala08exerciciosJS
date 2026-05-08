function check(){
    var wasBorn = parseInt(document.getElementById('birth').value)
    var res = document.getElementById('result')
    var clientAge = document.getElementById('age')
    
    if(isNaN(wasBorn)){
        res.textContent = "Escreve numero bobao 🚫"
        res.style.color = "red"
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasBorn
    
    if(age >= 18){
        res.textContent = "Mainho de 18✅"
        clientAge.textContent = age
        document.getElementById('v1').style.display = 'none'
        document.getElementById('v2').style.display = 'none'
        document.querySelector('.lebron').style.backgroundImage = "url(https://i.pinimg.com/736x/d6/c0/ec/d6c0ece2c8a3420c273076941fda8fcb.jpg)"
        document.querySelector('.lebron').style.backgroundSize = "1920px 1920px"
        document.querySelector('.lebron').style.backgroundPosition = "center"
    }else{
        res.textContent = "Meno de 18🔞"
        clientAge.textContent = age
        document.getElementById('v1').style.display = 'none'
        document.getElementById('v2').style.display = 'flex'
        document.querySelector('.lebron').style.backgroundImage = "none"
        document.querySelector('.lebron').style.backgroundSize = "none"
        document.querySelector('.lebron').style.backgroundPosition = "none"
    }

}