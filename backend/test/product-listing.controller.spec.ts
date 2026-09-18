import { describe, it, expect, vi } from "vitest";

import { ProductListingController } from "../src/modules/produtos/presentation/controllers/product-listing.controller.js"; 

describe("ProductListingController", () => {
  it("deve criar um anúncio", async () => {
    const createProductListingUseCase = {
      execute: vi.fn().mockResolvedValue({
        id: "1",
      }),
    };

    const findAllProductListingUseCase = {
      execute: vi.fn(),
    };

    const controller = new ProductListingController(
      createProductListingUseCase as any,
      findAllProductListingUseCase as any,
    );

    const data = {
      title: "Notebook",
  description: "Notebook usado",
  priceInCents: 250000,
  sellerId: "seller-1",
  categoryId: "category-1",
    };

    const result = await controller.create(data);

    expect(createProductListingUseCase.execute).toHaveBeenCalledWith(data);
    expect(result).toEqual({ id: "1" });
  });

  it("deve buscar todos os anúncios", async () => {
    const createProductListingUseCase = {
      execute: vi.fn(),
    };

    const findAllProductListingUseCase = {
      execute: vi.fn().mockResolvedValue([
        { id: "1", title: "Notebook" },
      ]),
    };

    const controller = new ProductListingController(
      createProductListingUseCase as any,
      findAllProductListingUseCase as any,
    );

    const result = await controller.findAll();

    expect(findAllProductListingUseCase.execute).toHaveBeenCalled();
    expect(result).toEqual([
      { id: "1", title: "Notebook" },
    ]);
  });
});