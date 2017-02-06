/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var juego = new Juego();

function onDragStartFicha(ev) {
    var idFicha = getIdFichaFromElementFicha(ev.target);
    ev.dataTransfer.setData("text", idFicha);
}

function onDragOverCasilla(ev) {
    ev.preventDefault();
}

function onDropCasilla(ev) {
    ev.preventDefault();

    var idFicha = ev.dataTransfer.getData("text");
    var elementCasilla = ev.target;
    var idCasilla = getIdCasillaFromElementCasilla(elementCasilla);
    var jugador = juego.comprobarTurno();

    if (juego.esPermitidoColocarFicha(idFicha)) {
        if (juego.isLibreCasillaTablero(idCasilla)) {

            var imagen = new Image();
            imagen.src = document.getElementById(idFicha).src;
            imagen.id = idCasilla;
            ev.target.appendChild(imagen);

//            var ficha = document.getElementById(idFicha).cloneNode(true);
//            ficha.id = idCasilla;
//            ev.target.appendChild(ficha);

            juego.registrarMovimiento(idCasilla, jugador);
            if (juego.comprobarGanador(jugador)) {
                juego.mostrarGanador(jugador);
            }
            juego.cambiarTurno();
        }
    }
}

function getIdFichaFromElementFicha(elementFicha) {
    return elementFicha.id;
}

function getIdCasillaFromElementCasilla(elementCasilla) {
    return elementCasilla.id;
}