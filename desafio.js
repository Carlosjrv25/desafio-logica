let nomeHeroi = "Maximos"
let nivelXp = 10001
let classificador = "O Herói "+ nomeHeroi +" está no nível "

if(nivelXp <= 1000){
    console.log(classificador + "Ferro")
}else if(nivelXp >= 1001 && nivelXp <=2000){
    console.log(classificador + "Bronze")
}else if(nivelXp >= 2001 && nivelXp <=5000){
    console.log(classificador + "Prata")
}else if(nivelXp >= 6001 && nivelXp <=7000){
    console.log(classificador + "Ouro")    
}else if(nivelXp >= 7001 && nivelXp <=8000){
    console.log(classificador + "Platina")
}else if(nivelXp >= 8001 && nivelXp <=9000){
    console.log(classificador + "Ascendente")
}else if(nivelXp >= 9001 && nivelXp <=10000){
    console.log(classificador + "Imortal")
}else {
    console.log(classificador + "Radiante")
};