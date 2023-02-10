

class ProductManager {
        
    constructor(){
            this.products = [];
            this.unique_id = 1;
        }
            // creamos el metodo getProducts que devuelve el contenido del arreglo products
        getProducts(){
            return this.products;
        }
            // creacion del metodo addProducts que agrega productos al arreglo
        addProducts(titulo, descripcion, precio, imagen, codigo, inventario){
           
                let newProduct = {
                    id : this.unique_id ++,
                    title : titulo,
                    description : descripcion,
                    price : precio,
                    thumbnail : imagen,
                    code : codigo,
                    stock : inventario
                }
                    //nos aseguramos de que no se repita el codigo de producto al llamar al metodo
                let found = (this.products.find( i => i.code === codigo));
                if(!found) {
                    this.products.push(newProduct);
                }  else  {
                    console.log('Error, codigo de producto repetido')
                }
            }
            // Realizamos la busqueda del producto segun su ID. si no lo localiza, devuelve `Not Found`. si lo encuentra, devuelve el producto.   
        getProductsByID(id){
        
            let productFound = this.products.find (i => i.id === id);
                if(!productFound){
                    console.log('Not found.')
                }  else  {
                    console.log(productFound);
                }
        }        
}

//COMPROBACIONES 

let productoNuevo = new ProductManager();
console.log(productoNuevo.getProducts());
productoNuevo.addProducts('producto prueba', 'este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25);
console.log(productoNuevo.getProducts());
productoNuevo.addProducts('producto prueba', 'este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25);
productoNuevo.getProductsByID(1);