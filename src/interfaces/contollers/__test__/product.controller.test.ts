import { ProductCreateUseCase } from "../../../use_cases/product/product.create_use_case";
import { ProductController } from "../product.controller";

describe("Product controller unit test", () => {
  it("should create Product", async () => {
    const mockProductCreateUseCase = {
      execute: jest.fn().mockResolvedValue(),
    };

    const productController = new ProductController(
      mockProductCreateUseCase as any,
    );

    await productController.createProduct(
      { body: { name: "test", price: 23 } },
      "t",
    );

    expect(mockProductCreateUseCase.execute).toHaveBeenCalled();
  });
});
