/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var juego = new Juego();

function onDragStartFicha(ev) {
    var idFicha = obtenerIdFicha(ev.target);
    ev.dataTransfer.setData("text", idFicha);
}

function onDragOverCasilla(ev) {
    ev.preventDefault();
}

function onDropCasilla(ev) {
    ev.preventDefault();
    var idFicha = ev.dataTransfer.getData("text");


    if (juego.esPermitidoColocarFicha(idFicha)) {
        if (juego.isLibreCasillaTablero(ev.target.id)) {
//        var imagen = new Image();
//        imagen.src = document.getElementById(idFicha).src;
//        ev.target.appendChild(imagen);

            var nodeCopy = document.getElementById(idFicha).cloneNode(true);
            nodeCopy.id = ev.target.id;
            ev.target.appendChild(nodeCopy);
//alert(ev.target.id);
//alert("return "+juego.isLibreCasillaTablero(ev.target.id));
//        alert("1 " + juego.comprobarTurno());

            juego.registrarMovimiento(ev.target.id, juego.comprobarTurno());
            if (juego.comprobarGanador(juego.comprobarTurno())) {
//                document.getElementById("resultado").append("GANA JUGADOR " + juego.comprobarTurno());
                $("#resultado").append("GANA JUGADOR " + juego.comprobarTurno());
//                $('.ficha').fadeTo('slow', .6);
//                $('.ficha').append('<div style="position: absolute;top:0;left:0;width: 100%;height:100%;z-index:2;opacity:0.4;filter: alpha(opacity = 50)"></div>');

                $("#X").attr("draggable", false);
                $("#O").attr("draggable", false);
//                }
            }
//        document.getElementById("victoria").append(juego.comprobarGanador(juego.comprobarTurno()));
//        
//var fichas = document.getElementsByClassName("ficha");
//for(var i = 0; i < fichas.length; i++){
//    
//}
//$(".ficha").attr("draggable", false);
            juego.cambiarTurno();
//            alert("2 " + juego.comprobarTurno());
        }
    }
}

function obtenerIdFicha(data) {
    return data.id;
}