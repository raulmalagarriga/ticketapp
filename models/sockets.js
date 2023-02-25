const TicketList = require("./ticket-list");


class Sockets {

    constructor( io ) {

        this.io = io;
        // crear instancia del ticket list
        this.ticketList = new TicketList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('cliente conectado');
            // Escuchar eventos
            socket.on('solicitar-ticket' , (data , callback) => {
                const nuevoTicket = this.ticketList.crearTicket();
                callback(nuevoTicket);
            });
            socket.on('siguiente-ticket-trabajar' , ({nombre , escritorio} , callback) => {
                const suTicket = this.ticketList.asignarTicket( nombre , escritorio);
                callback(suTicket);
                this.io.emit('ticket-asignado' , this.ticketList.ultimosTrece);
            });
        
        });
    }


}


module.exports = Sockets;