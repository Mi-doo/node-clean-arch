import { Product } from "../../entities/product";

export interface IProductRepository {
  findProducts(): Promise<Product[]>;
  findProductById(id: number): Promise<Product | null>;
  addProduct(product: Product): Promise<void>;
  updateProduct(product: Product): Promise<void>;
}
