//E-commerce

function Producto(id, nombre, precio, cantidad, categoria) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
  this.categoria = categoria;
}

const productos = [];

productos.push(new Producto(1, "Remera", 8000, 30, "Ropa"));
productos.push(new Producto(2, "Buzo", 12000, 11, "Ropa"));
productos.push(new Producto(3, "Zapato", 20000, 24, "Calzado"));
productos.push(new Producto(4, "Muñequera", 3000, 15, "Accesorios"));
productos.push(new Producto(5, "Bolso Deportivo", 5000, 20, "Accesorios"));

productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

const productoDeseado = prompt("¿Qué producto desea comprar?");

const productoEncontrado = productos.find(
  (producto) => producto.nombre === productoDeseado
);

if (productoEncontrado) {
  const costoTotal = productoEncontrado.precio;

  const mensaje = `El producto "${productoEncontrado.nombre}" está listo para ser enviado a su domicilio. 
    El costo total es $${costoTotal}. ¡Muchas gracias por su compra!`;

  alert(mensaje);
} else {
  alert("Disculpe, no tenemos ese producto.");
}
