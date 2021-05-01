import ClientInvoice from "./clientInvoice";

//Caso1
export default class RegularClientInvoice extends ClientInvoice {
    constructor() {
        super();
    }

    //Different rate per room type
    getRoomPrice = (roomType) => {
        switch(roomType){
            case "standard":
                return 100;
            case "suite":
                return 150;
        }
    }
}
