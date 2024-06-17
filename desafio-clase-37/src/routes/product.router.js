import { CustomRouter } from './routes.js'
import ProductsController from "../controllers/products.controller.js"
import { verificatePremiumUser } from '../middlewares/auth.js';

export default class ProductRouter extends CustomRouter {
  init() {
    this.get("/", ['authenticated'], ProductsController.getProducts);
    this.get("/mockingproducts", ['authenticated'], ProductsController.generateProducts)
    this.post("/test", ['admin'], ProductsController.test)
    this.post("/", ['admin', 'premium'], ProductsController.addProduct);
    this.put("/:pid", ['admin', 'premium'], verificatePremiumUser, ProductsController.updateProduct)
    this.delete("/:pid", ['admin', 'premium'], verificatePremiumUser, ProductsController.deleteProduct)
    this.get("/:id", ['authenticated'], ProductsController.getProductById);
  }
}
