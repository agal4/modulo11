import ClientInvoice from "./clientInvoice";

//Caso 2
export default class TourOpClientInvoice extends ClientInvoice {
    
    constructor() {
        super();
    }
     
    calcTotal = () => {
        this.calcSubtotal();
        //Apply 15% discount
        this._total = this.applyVAT(this.applyDiscount(this._subtotal,15));
    }

    applyDiscount = (amount, discount) => amount - amount*(discount/100);
}