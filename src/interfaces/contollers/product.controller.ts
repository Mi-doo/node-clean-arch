import { ProductCreateUseCase } from "../../use_cases/product/product.create_use_case";

export class ProductController {
  constructor(private readonly productCreateUseCase: ProductCreateUseCase) {}

  async createProduct(req: any, res: string) {
    const { name, price } = req.body;
    try {
      await this.productCreateUseCase.execute(name, price);
    } catch (e) {
      console.log(e);
      throw "product creation error";
    }
  }
}
