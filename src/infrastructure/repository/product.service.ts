import { Product } from "../../../entities/product";
import { IProductRepository } from "../../../interfaces/gateways/product.repository";

export class ProductService implements IProductRepository {
  private db: string;

  constructor() {
    this.db = "db service";
  }

  async addProduct(product: Product): Promise<void> {
    return;
  }

  async updateProduct(product: Product): Promise<void> {
    return;
  }

  async findProductById(id: number): Promise<Product | null> {
    return new Product("tesla", 23);
  }
}
