/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var TURNO = {JUGADORX: "X", JUGADORO: "O"};

function Juego() {

    this.turno = TURNO.JUGADORX;

    this.tablero = [["", "", ""], ["", "", ""], ["", "", ""]];

}

Juego.prototype.isLibreCasillaTablero = function (fila, columna) {
    if (this.tablero[fila][columna] === TURNO.JUGADORX || this.tablero[fila][columna] === TURNO.JUGADORO) {
        return false;
    } else {
        return true;
    }
};

Juego.prototype.comprobarGanador = function (jugador) {
    for (i = 0; i < 3; i++) {
        var contador = 0;
        for (j = 0; j < 3; j++) {
            if (this.tablero[i][j] === jugador) {
                contador += 1;
            }
            if (contador === 3) {
                return true;
            }

        }
    }
    for (i = 0; i < 3; i++) {
        var contador = 0;
        for (j = 0; j < 3; j++) {
            if (this.tablero[j][i] === jugador) {
                contador += 1;
            }
            if (contador === 3) {
                return true;
            }
        }
    }

    if ((this.tablero[0][0] === jugador && this.tablero[1][1] === jugador && this.tablero[2][2] === jugador)
            || (this.tablero[0][2] === jugador && this.tablero[1][1] === jugador && this.tablero[2][0] === jugador)) {
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
        $("#" + this.turno).removeClass("animated infinite jello");
        this.turno = TURNO.JUGADORO;
        $("#" + this.turno).addClass("animated infinite jello");
    } else if (this.turno === TURNO.JUGADORO) {
        $("#" + this.turno).removeClass("animated infinite jello");
        this.turno = TURNO.JUGADORX;
        $("#" + this.turno).addClass("animated infinite jello");
    }
};

Juego.prototype.registrarMovimiento = function (fila, columna, jugador) {
    this.tablero[fila][columna] = jugador;
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
    $("#" + jugador).removeClass("animated infinite jello");
    
    $("#victoria").append("<p id='resultado' class='magictime swashIn'>VICTORIA</p>");
    
    $("#reiniciar").append("<input type='button' value='Reiniciar' class='reset magictime vanishIn' onclick='reset()'/>");
};

Juego.prototype.reset = function () {
    $("#X").attr("draggable", true);
    $("#O").attr("draggable", true);
    
    $(".casilla").css("opacity", "1");
    $(".casilla").empty();
    
    $("#" + TURNO.JUGADORX).removeClass("ficha" + TURNO.JUGADORX);
    $("#" + TURNO.JUGADORX).addClass("animated infinite jello");
    $("#" + TURNO.JUGADORO).removeClass("ficha" + TURNO.JUGADORO);
    
    $("#victoria").empty();
    
    $("#reiniciar").empty();
    
    this.turno = TURNO.JUGADORX;
    
    this.tablero = [["", "", ""], ["", "", ""], ["", "", ""]];
};

var juego = new Juego();