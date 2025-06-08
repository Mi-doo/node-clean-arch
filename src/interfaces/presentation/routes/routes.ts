import { ProductService } from "../../../infrastructure/repository/product.service";
import { ProductCreateUseCase } from "../../../use_cases/product/product.create_use_case";
import { ProductController } from "../../contollers/product.controller";

const productService = new ProductService();
const productCreateUseCase = new ProductCreateUseCase(productService);
const productController = new ProductController(productCreateUseCase);
