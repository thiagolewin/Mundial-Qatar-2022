
function BorrarEstructuraInicial() {
    estructura.parentElement.removeChild(estructura);
    cruces.parentElement.removeChild(cruces);
}
const aEquipo = ["Catar","Ecuador","Senegal","Paises bajos"];
const bEquipo = ["Inglaterra","Iran","Usa","Gales"];
const cEquipo = ["Argentina","Arabia Saudita","Mexico","Polonia"];
const dEquipo = ["Francia","Australia","Dinamarca","Tunez"];
const eEquipo = ["España","Costa Rica","Alemania","Japon"];
const fEquipo = ["Belgica","Canada","Marruecos","Croacia"];
const gEquipo = ["Brasil","Serbia","Suiza","Camerun"];
const hEquipo = ["Portugal","Ghana","Uruguay","Corea"];
const aPuntos = [0,0,0,0];
const bPuntos = [0,0,0,0];
const cPuntos = [0,0,0,0];
const dPuntos = [0,0,0,0];
const ePuntos = [0,0,0,0];
const fPuntos = [0,0,0,0];
const gPuntos = [0,0,0,0];
const hPuntos = [0,0,0,0];

const aLocales = ["Catar","Senegal","Catar","Paises bajos","Paises bajos", "Ecuador"];
const aVisitantes = ["Ecuador","Paises bajos","Senegal","Ecuador","Catar","Senegal"];
const bLocales = ["Inglaterra","Usa","Gales","Inglaterra","Iran", "Gales"];
const bVisitantes = ["Iran","Gales","Iran","Usa","Usa", "Inglaterra"];
const cLocales= ["Argentina","Mexico","Polonia","Argentina","Polonia", "Arabia Saudita"];
const cVisitantes = ["Arabia Saudita","Polonia","Arabia Saudita","Mexico","Argentina", "Mexico"];
const dLocales = ["Dinamarca","Francia","Tunez","Francia","Australia", "Tunez"];
const dVisitantes = ["Tunez","Australia","Australia","Dinamarca","Dinamarca", "Francia"];
const eLocales = ["Alemania","España","Japon","España","Japon", "Costa Rica"];
const eVisitantes = ["Japon","Costa Rica","Costa Rica","Alemania","España", "Alemania"];
const fLocales = ["Marruecos","Belgica","Belgica","Croacia","Croacia", "Canada"];
const fVisitantes = ["Croacia","Canada","Marruecos","Canada","Belgica", "Marruecos"];
const gLocales = ["Suiza","Brasil","Camerun","Brasil","Serbia", "Camerun"];
const gVisitantes = ["Camerun","Serbia","Serbia","Suiza","Suiza", "Brasil"];
const hLocales = ["Uruguay","Portugal","Corea","Portugal","Ghana", "Corea"];
const hVisitantes = ["Corea","Ghana","Ghana","Uruguay","Uruguay", "Portugal"];

const partidos = [[aLocales,aVisitantes],[bLocales,bVisitantes],[cLocales,cVisitantes],[dLocales,dVisitantes],[eLocales,eVisitantes],[fLocales,fVisitantes],[gLocales,gVisitantes],[hLocales,hVisitantes]];
const equiposPuntos = [[aEquipo,aPuntos],[bEquipo,bPuntos],[cEquipo,cPuntos],[dEquipo,dPuntos],[eEquipo,ePuntos],[fEquipo,fPuntos],[gEquipo,gPuntos],[hEquipo,hPuntos]];
const abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const grupos = partidos.length;
const eXGrupos = partidos[0][0].length;
const partidosPorGrupo = (eXGrupos/2)*(eXGrupos-1);
const locales = document.getElementsByClassName("local")[0];
const visitantes = document.getElementsByClassName("visitante")[0];
const estructura = document.getElementsByClassName("grupo")[0];
const main = document.querySelector("main");
const cruces = document.getElementsByClassName("segunda__fase")[0];
let octavos1 = [];
let octavos2 = [];
let fragmentoGrupos = document.createDocumentFragment();
BorrarEstructuraInicial();
for (let i = 0; i<grupos;i++) {

    let estructuraPaste = estructura.cloneNode(true);
    let localesPaste = locales.cloneNode(true);
    let visitantesPaste = visitantes.cloneNode(true);
    let f = 0;
    for (let h = 2; h<13;h+=2) {
        let paisLocal = partidos[i][0][f];
        let paisVisitante = partidos[i][1][f];
        localesPaste.children[h].children[0].textContent = paisLocal;
        visitantesPaste.children[h].children[1].textContent = paisVisitante;  
        localesPaste.children[h].children[1].src = `img/${paisLocal}.png`;
        visitantesPaste.children[h].children[0].src = `img/${paisVisitante}.png`;
        for (let p = 0; p<2;p++) {
            estructura.children[0].children[1].children[1].children[h].children[p].setAttribute("name",`${i}${(h/2)-1}${p}`)
            let input = estructura.children[0].children[1].children[1].children[h].children[p].cloneNode(true);
            input.addEventListener("input",Actualizar, false)
            estructuraPaste.children[0].children[1].children[1].children[h].children[p].replaceWith(input);
        }
        if (h<9) {
            estructuraPaste.children[1].children[0].children[0].children[h].children[0].textContent = equiposPuntos[i][0][(h/2)-1];
            estructuraPaste.children[1].children[0].children[0].children[h].children[1].src = `img/${equiposPuntos[i][0][(h/2)-1]}.png`;
        }
        f++;
    }

        

    estructuraPaste.children[0].children[1].children[0].replaceWith(localesPaste)
    estructuraPaste.children[0].children[1].children[2].replaceWith(visitantesPaste)
    estructuraPaste.children[0].children[0].textContent = "Grupo " + abecedario[i].toUpperCase();
    fragmentoGrupos.appendChild(estructuraPaste);
}
main.appendChild(fragmentoGrupos);
main.appendChild(cruces);
ActualizarCruces()
function Actualizar(e) {
    let codigo = e.target.attributes.name.value;
    let puntajeEquipo = [[],[],[],[],[],[],[],[]];
    const fixture = document.getElementsByClassName("fixture__paises")[codigo[0]];
    const fixturePuntos = document.getElementsByClassName("fixture__puntos")[codigo[0]];
    const fixtureDif = document.getElementsByClassName("fixture__dif")[codigo[0]];
    const fixtureGf = document.getElementsByClassName("fixture__gf")[codigo[0]];
    const fixtureGc = document.getElementsByClassName("fixture__gc")[codigo[0]];
    const resultado = document.getElementsByClassName("resultados")[codigo[0]];
    const agf = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    for (let i =0; i<4;i++) {
        equiposPuntos[codigo[0]][1][i] = 0;
    }

    for (let o = 0; o<6;o++) {
        if(o == 0) {
            for (let i =0; i<4;i++) {
                agf[0][i] = 0;
            } 
        }
        let input1 =document.querySelector(`input[name="${codigo[0]+o+0}"]`);
        let input2 = document.querySelector(`input[name="${codigo[0]+o+1}"]`);
        let valor1 = parseInt(input1.value)
        let valor2 = parseInt(input2.value)
        if (input1.value.length >0 && input2.value.length >0) {
            resultado.children[2+(2*o)].children[0].textContent = valor1 + "-" + valor2
        }
        if (valor1 > valor2 && input1.value.length >0 && input2.value.length >0) {
            let paisLocal = partidos[codigo[0]][0][o]
            let paisVisitante = partidos[codigo[0]][1][o]
            let equipoPos = 0;
            while (equipoPos<4 && equiposPuntos[codigo[0]][0][equipoPos] != paisLocal) {
                equipoPos++;
            }
            equiposPuntos[codigo[0]][1][equipoPos]+=3;
            agf[0][equipoPos] += parseInt(input1.value)
            agf[1][equipoPos] += parseInt(input2.value)
            agf[2][equipoPos] = agf[0][equipoPos] - agf[1][equipoPos]
            equipoPos = 0;
            while (equipoPos<4 && equiposPuntos[codigo[0]][0][equipoPos] != paisVisitante) {
                equipoPos++;
            }
            agf[0][equipoPos] += parseInt(input2.value)
            agf[1][equipoPos] += parseInt(input1.value)
            agf[2][equipoPos] = agf[0][equipoPos] - agf[1][equipoPos]
            
        } else if (input1.value == input2.value && input1.value.length >0 && input2.value.length >0) {
            let paisVisitante = partidos[codigo[0]][1][o]
            let paisLocal = partidos[codigo[0]][0][o]
            let equipoPos = 0;
            while (equipoPos<eXGrupos && equiposPuntos[codigo[0]][0][equipoPos] != paisVisitante) {
                equipoPos++;
            }
            equiposPuntos[codigo[0]][1][equipoPos]+=1;
            agf[0][equipoPos] += parseInt(input1.value)
            agf[1][equipoPos] += parseInt(input2.value)
            agf[2][equipoPos] = agf[0][equipoPos] - agf[1][equipoPos]
            equipoPos = 0;
            while (equipoPos<eXGrupos && equiposPuntos[codigo[0]][0][equipoPos] != paisLocal) {
                equipoPos++;
            }
            equiposPuntos[codigo[0]][1][equipoPos]+=1;  
            agf[0][equipoPos] += parseInt(input2.value)
            agf[1][equipoPos] += parseInt(input1.value)
            agf[2][equipoPos] = agf[0][equipoPos] - agf[1][equipoPos]
            
        }      else if (valor2 > valor1 && input1.value.length >0 && input2.value.length >0) {
            let paisLocal = partidos[codigo[0]][0][o]
            let paisVisitante = partidos[codigo[0]][1][o]
            let equipoPos = 0;
            while (equipoPos<4 && equiposPuntos[codigo[0]][0][equipoPos] != paisVisitante) {
                equipoPos++;
            }
            equiposPuntos[codigo[0]][1][equipoPos]+=3;
            agf[0][equipoPos] += parseInt(input2.value)
            agf[1][equipoPos] += parseInt(input1.value)
            agf[2][equipoPos] = agf[0][equipoPos] - agf[1][equipoPos]
            equipoPos = 0;
            while (equipoPos<4 && equiposPuntos[codigo[0]][0][equipoPos] != paisLocal) {
                equipoPos++;
            }
            agf[0][equipoPos] += parseInt(input1.value)
            agf[1][equipoPos] += parseInt(input2.value)
            agf[2][equipoPos] = agf[0][equipoPos] - agf[1][equipoPos]
        }
  
        

    }

        for (let i = 0;i<4;i++) {
            let mayor = -1;
            let posMayor;
            let gf1;
            for (let f = 0;f<4;f++) {
                if (equiposPuntos[codigo[0]][1][f]> mayor) {
                    mayor =equiposPuntos[codigo[0]][1][f];
                    posMayor = f;
                }
                if (equiposPuntos[codigo[0]][1][f] == mayor) {
                    if (agf[2][f] >agf[2][posMayor]) {
                        mayor =equiposPuntos[codigo[0]][1][f];
                        posMayor = f;
                    } else if (agf[2][f] <agf[2][posMayor]) {
                        mayor =equiposPuntos[codigo[0]][1][posMayor];
                        posMayor = posMayor;
                    }
                }
            }
    
            puntajeEquipo[0][i] = mayor;
            puntajeEquipo[1][i] = equiposPuntos[codigo[0]][0][posMayor]
            puntajeEquipo[2][i] = agf[2][posMayor]
            puntajeEquipo[3][i] = agf[0][posMayor]
            puntajeEquipo[4][i] = agf[1][posMayor]
            equiposPuntos[codigo[0]][1][posMayor] = -2;
        }
    for (let h = 2; h<9;h+=2) {
        fixture.children[h].children[0].textContent = puntajeEquipo[1][(h/2)-1];
        fixturePuntos.children[h].children[0].textContent = puntajeEquipo[0][(h/2)-1];
        fixture.children[h].children[1].src = `img/${puntajeEquipo[1][(h/2)-1]}.png`;
        fixtureDif.children[h].children[0].textContent = puntajeEquipo[2][[(h/2)-1]];
        fixtureGf.children[h].children[0].textContent = puntajeEquipo[3][[(h/2)-1]];
        fixtureGc.children[h].children[0].textContent = puntajeEquipo[4][[(h/2)-1]];
    }

  
    ActualizarCruces()
}
function ActualizarCruces() {
   
    for (let i = 0; i<8;i++) {
        const fixture = document.getElementsByClassName("fixture")[i];
        if (i%2 == 0) {
            octavos1[i] = fixture.children[0].children[0].children[2].children[0].textContent
            octavos2[i] = fixture.children[0].children[0].children[4].children[0].textContent
        }
        if (i%2 != 0) {
            octavos1[i] = fixture.children[0].children[0].children[4].children[0].textContent
            octavos2[i] = fixture.children[0].children[0].children[2].children[0].textContent
        }
    }
    let x =0;
    for (let i = 0; i<2; i++) {
        for (let h = 0; h<2;h++) {
            for (let f = 0;f<2;f++) {
                cruces.children[0].children[0].children[i].children[h].children[f].addEventListener("click",Seleccionado);
                cruces.children[0].children[0].children[i].children[h].children[f].children[0].textContent = octavos1[x]
                cruces.children[1].children[0].children[i].children[h].children[f].children[0].textContent = octavos2[x]
                cruces.children[0].children[0].children[i].children[h].children[f].children[1].src = `img/${octavos1[x]}.png`
                cruces.children[1].children[0].children[i].children[h].children[f].children[1].src = `img/${octavos2[x]}.png`
                cruces.children[1].children[0].children[i].children[h].children[f].addEventListener("click",Seleccionado);
                x++;
            }
        }
    }
}
let cuartos1 = []
let cuartos2 = []
function Seleccionado(e) {
    let seleccionado = e.path[1].children[0].textContent
    if(e.path.length == 11) {
        seleccionado = e.path[0].children[0].textContent
    }
    let position;
    let positionCuartos;
    let unoDos = [-1,];
    if (octavos1.includes(seleccionado)) {
        position = Math.floor(octavos1.indexOf(seleccionado)/2)
        cuartos1[position] = seleccionado
        unoDos[0] = 0;
    } else if (octavos2.includes(seleccionado)) {
        position = Math.floor(octavos2.indexOf(seleccionado)/2)
        cuartos2[position] = seleccionado
        unoDos[0] = 1;
    }
    if (position <=1) {
        positionCuartos = position
    } else if (position >=2) {
        positionCuartos = position-2;
    }
    cruces.children[unoDos[0]].children[1].children[Math.floor(position/2)].children[positionCuartos].children[0].textContent = seleccionado;
    cruces.children[unoDos[0]].children[1].children[Math.floor(position/2)].children[positionCuartos].children[1].src = `img/${seleccionado}.png`
    cruces.children[unoDos[0]].children[1].children[Math.floor(position/2)].children[positionCuartos].addEventListener("click",Semifinales);
}
let semi1 = [];
let semi2 = []
function Semifinales(e) {
    let seleccionado = e.path[1].children[0].textContent;
    if(e.path.length == 10) {
        seleccionado = e.path[0].children[0].textContent;
    }
    let position;
    let positionCuartos;
    let unoDos = [-1,];
    if (cuartos1.includes(seleccionado)) {
        position = Math.floor(cuartos1.indexOf(seleccionado)/2)
        semi1[position] = seleccionado
        unoDos[0] = 0;
        unoDos[1] = cuartos1;
    } else if (cuartos2.includes(seleccionado)) {
        position = Math.floor(cuartos2.indexOf(seleccionado)/2)
        semi1[position] = seleccionado
        unoDos[0] = 1;
        unoDos[1] = cuartos2;
    }
    if (position <=1) {
        positionCuartos = position
    } else if (position >=2) {
        positionCuartos = position-2;
    }
    console.log(position)
    cruces.children[unoDos[0]].children[2].children[Math.floor(position/2)].children[positionCuartos].children[0].textContent = seleccionado;
    cruces.children[unoDos[0]].children[2].children[Math.floor(position/2)].children[positionCuartos].children[1].src = `img/${seleccionado}.png`
    cruces.children[unoDos[0]].children[2].children[Math.floor(position/2)].children[positionCuartos].addEventListener("click",Final);
}
function Final(e) {
    let seleccionado = e.path[1].children[0].textContent;
    if(e.path.length == 10) {
        seleccionado = e.path[0].children[0].textContent;
    }
    let unoDos = [-1,];
    if (cuartos1.includes(seleccionado)) {
        unoDos[0] = 0;
    } else if (cuartos2.includes(seleccionado)) {
        unoDos[0] = 1;
    }
    let position;
    cruces.children[2].children[0].children[unoDos[0]].children[0].textContent = seleccionado;
    cruces.children[2].children[0].children[unoDos[0]].children[1].src = `img/${seleccionado}.png`
    cruces.children[2].children[0].children[unoDos[0]].addEventListener("click",Ganador);
}
function Ganador(e) {
    let seleccionado = e.path[1].children[0].textContent;
    if(e.path.length == 9) {
        seleccionado = e.path[0].children[0].textContent;
    }
    const gano = document.getElementsByClassName("cuadradoGanador")[0];
    gano.children[0].textContent = seleccionado
    gano.children[1].src = `img/${seleccionado}.png`
}