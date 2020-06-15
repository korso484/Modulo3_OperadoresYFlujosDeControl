/*IVA 
alimentacion 10%
libro 4%
lo demás 21%
No valen negativos y todo se mostrará por consola
*/

//Producto
const product = { count: 3, price: 12.55, type: "ropa"};

//Calcular precio total

function getTotal(product){
    let total = product.count <= 0 ? 0 : product.count * product.price;
    return total;
}


//Calcular IVA 

function getVAT(product){


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

    return tipoIVA * product.price;
}

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

//Avanzado

function getTotalVAT(product){
    return product.count > 0 ? product.count * getVAT(product) : 0;
}

//Mostrar resultados

function printProductPrice(product){
    const subtotal = getTotal(product);
    const vat = getTotalVAT(product);
    const total = subtotal + vat;

    console.log("Subtotal: ", subtotal + "€");
    console.log("IVA: ", vat + "€");
    console.log("Total: ", total + "€");
}

printProductPrice(product);












