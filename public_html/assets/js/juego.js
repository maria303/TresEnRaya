/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var TURNO = {JUGADORX: "X", JUGADORO: "O"};

function Juego() {

    this.tablero = [];

    this.turno = TURNO.JUGADORX;
}

Juego.prototype.isLibreCasillaTablero = function (idCasillaTablero) {
    if (this.tablero[idCasillaTablero] === TURNO.JUGADORX ||
            this.tablero[idCasillaTablero] === TURNO.JUGADORO) {
        return false;
    } else {
        return true;
    }
};

Juego.prototype.comprobarGanador = function (jugador) {
    if ((this.tablero[0] === jugador && this.tablero[1] === jugador && this.tablero[2] === jugador)
            || (this.tablero[3] === jugador && this.tablero[4] === jugador && this.tablero[5] === jugador)
            || (this.tablero[6] === jugador && this.tablero[7] === jugador && this.tablero[8] === jugador)) {
//        return "Gana " + jugador;
//$("#"+jugador).addClass("ficha"+jugador);
        return true;
    } else if ((this.tablero[0] === jugador && this.tablero[3] === jugador && this.tablero[6] === jugador)
            || (this.tablero[1] === jugador && this.tablero[4] === jugador && this.tablero[7] === jugador)
            || (this.tablero[2] === jugador && this.tablero[5] === jugador && this.tablero[8] === jugador)) {
//        return "Gana " + jugador;
//$("#"+jugador).addClass("ficha"+jugador);
        return true;
    } else if ((this.tablero[0] === jugador && this.tablero[4] === jugador && this.tablero[8] === jugador)
            || (this.tablero[2] === jugador && this.tablero[4] === jugador && this.tablero[6] === jugador)) {
//        return "Gana " + jugador;
//$("#"+jugador).addClass("ficha"+jugador);
        return true;
    }
};

Juego.prototype.esPermitidoColocarFicha = function (ficha) {
    if (this.turno === TURNO.JUGADORX) {
        if (ficha === this.turno) {
            return true;
        }
    } else if (this.turno === TURNO.JUGADORO) {
        if (ficha === this.turno) {
            return true;
        }
    }
    return false;
};

Juego.prototype.comprobarTurno = function () {
    return this.turno;
};

Juego.prototype.cambiarTurno = function () {
    if (this.turno === TURNO.JUGADORX) {
        $("#" + this.turno).removeClass("turno");
        this.turno = TURNO.JUGADORO;
        $("#" + this.turno).addClass("turno");
    } else if (this.turno === TURNO.JUGADORO) {
        $("#" + this.turno).removeClass("turno");
        this.turno = TURNO.JUGADORX;
        $("#" + this.turno).addClass("turno");
    }
};

Juego.prototype.registrarMovimiento = function (casilla, turno) {
    this.tablero[casilla] = turno;
};

Juego.prototype.moverFicha = function () {

};

Juego.prototype.nuevaPartida = function () {
    $("#X").attr("draggable", true);
    $("#O").attr("draggable", true);
};

Juego.prototype.mostrarGanador = function (jugador) {
    $("#X").attr("draggable", false);
    $("#O").attr("draggable", false);
    $(".casilla").css("opacity", "0.5");
    $("#" + jugador).addClass("ficha" + jugador);
    $("#resultado").append("VICTORIA");
    $("#resultado").addClass("magictime swashIn");
};

var juego = new Juego();