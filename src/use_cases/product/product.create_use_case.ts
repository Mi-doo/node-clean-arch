import { Product } from "../../entities/product";
import { IProductRepository } from "../../interfaces/gateways/product.repository";

export class ProductCreateUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(name: string, price: number): Promise<void> {
    const product = new Product(name, price);

    this.productRepository.addProduct(product);

    return;
  }
}
