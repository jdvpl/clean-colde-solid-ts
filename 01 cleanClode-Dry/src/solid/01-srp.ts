(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }
  class Mailer {
    private email: string;
    sendEmail(emailList: string[], template: "to-client" | "to-admin") {
      console.log("Enviando correo a ", template, emailList);
    }
  }
  class ProductBloc {
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
    notifyClients() {
      console.log("Enviando correo a los clientes");
    }
  }
  class CartBloc {
    private itemsCart: Object[] = [];
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }
  const productBloc = new ProductBloc();
  const cartBloc = new CartBloc();
  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
