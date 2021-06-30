//Práctica

const booking = { 
    count: 5, 
    price: 127.95 
};

let total = booking.count * booking.price;

const discount = total > 500 ? total * 0.2 : 0;

console.log("Total:", total + "€");

if(total > 500 && discount > 0) {
    const discounted = total - discount;
    console.log('Total con descuento del 20%', discounted + "€");
}

//EJERCICIOS EXTRA 

const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };


//Comparar si dos reservas son iguales
if(booking1 == booking2) {
    console.log('Booking1 y Booking2 son iguales');
} else {
    console.log('Booking1 y Booking2 NO son iguales');
}


//Mostrar la suma del número de noches de las dos reservas.
let totalDays = booking1.count + booking2.count;
console.log('Suma total del número de noches: ' + totalDays);


//Comparar dos reservas para mostrar la de mayor número de noches.
if(booking1.count > booking2.count) {
    console.log('booking1 tiene mayor numero de noches');
} else {
    console.log('booking2 tiene mayor numero de noches');
}


//Ampliar una noche más una reserva.
const total2 = (booking1.count + 1)  * booking1.price ;

console.log('Coste total ampliando la reserva una noche más: ' + total2);


//Calcular la diferencia de precio total entre dos reservas (incluidos descuentos)
let totalBooking1 = booking1.count * booking1.price;
let totalBooking2 = booking2.count * booking2.price;
totalBooking1 = totalBooking1 > 500 ? totalBooking1 * 0.2 : totalBooking1;
totalBooking2 = totalBooking2 > 500 ? totalBooking2 * 0.2 : totalBooking2;
let totalDiference = ((Math.abs(totalBooking1 - totalBooking2)).toFixed(2));

console.log('La diferencia total de precio entre las dos reservas es: ' + totalDiference);


//Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).
console.log(totalBooking1 > totalBooking2 ? 'El precio de totalBooking1 es mayor' :  'El precio de totalBooking2 es mayor');


//Mostrar número de reservas a las que se podrían aplicar descuento.
let arrayBookings = [booking1.count * booking1.price, booking2.count * booking2.price];
let counterBooking = 0;

for(let i = 0; arrayBookings.length > i; i++) {
    if(arrayBookings[i] > 500) {
        counterBooking++;
    }
}
console.log('Número de reservas a las que se podrían aplicar descuento ' + counterBooking);


//Mostrar "Todas con descuento" si las dos reservas tienen descuentos.
if(booking1 && booking2 > 500) {
    console.log('Todas con descuento');
} else {
    console.log('No todas las reservas tienen descuento');
}

//Mostrar la suma del precio total con descuentos de las dos reservas.
let totalWithDiscount = totalBooking1 + totalBooking2;
console.log('Con descuentos, la suma total de precio de las 2 reservas es: ' + totalWithDiscount);

