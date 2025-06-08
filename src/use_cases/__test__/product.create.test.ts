import { IProductRepository } from "../../interfaces/gateways/product.repository";
import { ProductCreateUseCase } from "../product/product.create_use_case";

const mockProductRepo = {
  addProduct: jest.fn(),
  // findProductById: jest.fn(),
  // findProducts: jest.fn(),
  // updateProduct: jest.fn(),
};

it("should  create the product", async () => {
  const productCreate = new ProductCreateUseCase(mockProductRepo as any);
  const product = await productCreate.execute("test", 24);
  expect(mockProductRepo.addProduct).toHaveBeenCalled();
});
