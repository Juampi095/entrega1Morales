class ProductManager {
    constructor() {
      this.products = [];
    }
  
    agregarProducto(title, description, price, thumbnail, code, stock) {
      const producto = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,  
      };
      
      if (
        title === undefined ||
        description === undefined ||
        price === undefined ||
        thumbnail === undefined ||
        code === undefined ||
        stock === undefined
      ) {
        return console.log("Todos los campos son obligatorios");
      }
  
      let condition = this.products.find((producto) => producto.code === code);
      if (condition) {
        return console.log("El producto ya existe");
      } else {
        this.products.push(producto);
      }
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      let myID = parseInt(id);
      let miProducto = null;
      this.products.forEach((producto) => {
        if (producto.id === myID) {
          miProducto = producto;
        }
      });
      if (miProducto === null) {
        return console.log("No existe el producto");
      } else {
        return miProducto;
      }
    }
  }
  
  const productManager = new ProductManager();
  productManager.agregarProducto(
    "Televisor Samsung OLED",
    "4K, Oled, 65 pulgadas",
    "1200",
    "https://images.samsung.com/is/image/samsung/p6pim/cl/qn65s95bagxzs/gallery/cl-oled-s95b-qn65s95bagxzs-533476969?$1300_1038_PNG$",
    "794159",
    15
);
productManager.agregarProducto(
    "Televisor Samsung OLED",
    "4K, Oled, 65 pulgadas",
    "1200",
    "https://images.samsung.com/is/image/samsung/p6pim/cl/qn65s95bagxzs/gallery/cl-oled-s95b-qn65s95bagxzs-533476969?$1300_1038_PNG$",
    "145798",
    15
);
  
  console.log(productManager.getProducts());
  
  console.log("busqueda de producto", productManager.getProductById(1));
  