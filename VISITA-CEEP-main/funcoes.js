function verificarNumero () {
    let min = 1;
    let max = 5;
    let numeroAleatorio =  Math.floor(Math.random() * (max - min + 1)) + min;
    let numeroDigitado = document.getElementById('number').value;

    if (numeroAleatorio == numeroDigitado){
    alert ('Parabéns, você acertou o número!');
} else { 
    alert("oh, que pena você errou, o número era " + numeroAleatorio + ", tente novamente!")}

}