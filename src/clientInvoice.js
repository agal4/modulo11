//Parent class with basic functionality
export default class ClientInvoice {
    
    constructor() {
        this._bookings = [];
        this._subtotal = 0;
        this._total = 0; 
    }

    set bookings(bookings){
        this._bookings = bookings;
        this.calcTotal();
    }

    set total(total) {
        this._total = total;
    }

    set subtotal(subtotal) {
        this._subtotal = subtotal;
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    calcTotal = () => {
        this.calcSubtotal();
        this._total = this.applyVAT(this._subtotal);
    }

    calcSubtotal = () => this._subtotal = this._bookings.reduce((accSubtotal,booking) => accSubtotal + this.calcBookingSubtotal(booking),0);

    calcBookingSubtotal = (booking) => { 
        let pricePerNight = this.getRoomPrice(booking.tipoHabitacion);
        //Add +15 per guest if breakfast is included
        if (booking.desayuno) pricePerNight = pricePerNight + 15*(booking.pax);
        //Add +40 per extra guest
        if (booking.pax > 1) pricePerNight = pricePerNight + 40*(booking.pax-1);
        return pricePerNight*booking.noches;
    }

    //Basic functionality: same rate for all rooms
    getRoomPrice = (roomType) => 100;

    applyVAT = (amount, tax) => amount + amount*0.21;

}