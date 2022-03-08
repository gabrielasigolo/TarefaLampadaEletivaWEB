function turnOnOff() {
    var lampada = document.getElementById('lampada');

    if (lampada.src.match('assets/img/lampadaAcessa.jpeg')) {
        lampada.src = 'assets/img/lampadaApagada.jpeg';
    } else {
        lampada.src = 'assets/img/lampadaAcessa.jpeg'
    }
}

lampada.addEventListener('click', turnOnOff)