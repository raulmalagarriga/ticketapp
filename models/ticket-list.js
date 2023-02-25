const Ticket = require('./ticket')


class TicketList {

    constructor() {
        this.ultimoNumero = 0;
        this.pendientes = [];
        this.ticketAsignados = [];
    }
    
    get siguienteNumero() {
        // this.ultimoNumero ++;
        return this.ultimoNumero++;
    }

    // Obtener 13 ultimos tickets, 10 en historial y 3 en pantalla principal
    get ultimosTrece() {    
        return this.ticketAsignados.slice(0,13);
    }

    crearTicket() {
        const nuevoTicket = new Ticket(this.siguienteNumero);
        this.pendientes.push(nuevoTicket);
        return  nuevoTicket;
    }
    asignarTicket( nombre, escritorio) {
        if( this.pendientes.length === 0 ){
            return null
        }
        const siguienteTicket = this.pendientes.shift(); //shift: sacamos el primer elemento del arreglo y lo retornamos
        siguienteTicket.nombre = nombre;
        siguienteTicket.escritorio = escritorio;
        this.ticketAsignados.unshift( siguienteTicket ); // colocamos el elemento en 1ra posicion del arreglo
        return siguienteTicket; // No es necesario retornar
    }
}   

module.exports = TicketList;