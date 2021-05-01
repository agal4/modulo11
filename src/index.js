import RegularClientInvoice from "./regularClientInvoice";
import TourOpClientInvoice from "./tourOpClientInvoice";

const reservas = [
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      desayuno: true,
      pax: 2,
      noches: 1
    }
  ];

//Test caso 1
console.log("Test Caso 1")
let clientInvoice = new RegularClientInvoice();
clientInvoice.bookings = reservas;
console.log(clientInvoice);
console.log ("Total: " + clientInvoice.total);
console.log ("Subtotal: " +clientInvoice.subtotal);

//Test caso 2
console.log("Test Caso 2")
let tourClientInvoice = new TourOpClientInvoice();
tourClientInvoice.bookings = reservas;
console.log(tourClientInvoice);
console.log ("Total: " + tourClientInvoice.total);
console.log ("Subtotal: " +tourClientInvoice.subtotal);