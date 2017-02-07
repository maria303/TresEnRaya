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
    var fila = getFilaCasillaFromElementCasilla(elementCasilla);
    var columna = getColumnaCasillaFromElementCasilla(elementCasilla);
    var jugador = juego.comprobarTurno();

    if (juego.esPermitidoColocarFicha(idFicha)) {
        if (juego.isLibreCasillaTablero(fila, columna)) {
            var imagen = juego.moverFicha(idFicha);
            ev.target.appendChild(imagen);
            juego.registrarMovimiento(fila, columna, jugador);
            if (juego.comprobarGanador(jugador)) {
                juego.mostrarGanador(jugador);
            } else {
                juego.cambiarTurno();
            }
        }
    }
}

function getIdFichaFromElementFicha(elementFicha) {
    return elementFicha.id;
}

function getFilaCasillaFromElementCasilla(elementCasilla) {
    return $(elementCasilla).attr("fila");
}

function getColumnaCasillaFromElementCasilla(elementCasilla) {
    return $(elementCasilla).attr("columna");
}

function reset() {
    juego.reset();
}

window.onload = function () {
    $(".casilla").filter(".last").css("border-bottom", "0px");
};