/*IVA 
alimentacion 10%
libro 4%
lo demás 21%
No valen negativos y todo se mostrará por consola
*/


//Calcular precio total

const product = { count: 3, price: 12.55, type: "ropa"};

let total = product.count <= 0 ? 0 : product.count * product.price;

console.log("El total sin IVA sería: "+ total);

//Calcular IVA 


switch(product.type){
    case "alimentacion":
        tipoIVA = 0.1;
        break;
    case "libro":
        tipoIVA = 0.04;
        break;
    default:
        tipoIVA = 0.21;
        break;
}

console.log("El tipo de IVA a aplicar es de: " + tipoIVA);

var IVA = total * tipoIVA;
console.log("El IVA a aplicar sería: " + IVA);

var totalIVA = total + IVA;
console.log("El total con IVA sería: " + totalIVA );

//Calcular Sueldo Neto Nómina

const empleado = { 
        bruto: 14500,
        hijos: 2,
        pagas: 14
    }

console.log("Su sueldo bruto anual es de: " + empleado.bruto);

var retencion;

if(empleado.bruto<=12000){
    retencion = 0;
} else if(empleado.bruto<=24000){
    retencion = 0.08;
} else if(empleado.bruto<=34000){
    retencion = 0.16;
} else{
    retencion = 0.3;
}

empleado.hijos === 2 ? retencion = retencion - 0.02 : retencion ;

console.log("En base a su número de hijos y sueldo su retención es de: " + retencion);

var sueldoNeto = empleado.bruto - (empleado.bruto * retencion);
console.log("Su sueldo Neto Anual es de: " + sueldoNeto);

var sueldoNetoAnual = sueldoNeto/empleado.pagas;
console.log("Su sueldo Neto Mensual es de: " + sueldoNetoAnual);










