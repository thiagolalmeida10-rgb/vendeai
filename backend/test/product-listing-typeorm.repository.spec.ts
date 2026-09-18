import { describe, it, expect, vi } from "vitest";

import { ProductListingTypeOrmRepository } from "../src/modules/produtos/infra/database/typeorm/repositories/product-listing-typeorm.repository.js"; 

describe("ProductListingTypeOrmRepository", () => {
  it("deve criar e salvar um anúncio", async () => {
    const repository = {
      create: vi.fn().mockReturnValue({
        id: "1",
        title: "Notebook",
      }),
      save: vi.fn(),
    };

    const productListingRepository =
      new ProductListingTypeOrmRepository(repository as any);

    const productListing = {
      title: "Notebook",
      description: "Notebook usado",
      priceInCents: 250000,
      sellerId: "seller-1",
      categoryId: "category-1",
      status: "AVAILABLE",
    } as any;

    await productListingRepository.create(productListing);

    expect(repository.create).toHaveBeenCalledWith({
      title: productListing.title,
      description: productListing.description,
      priceInCents: productListing.priceInCents,
      sellerId: productListing.sellerId,
      categoryId: productListing.categoryId,
      status: productListing.status,
    });

    expect(repository.save).toHaveBeenCalled();
  });

  it("deve buscar todos os anúncios", async () => {
    const repository = {
      find: vi.fn().mockResolvedValue([
        {
          title: "Notebook",
          description: "Notebook usado",
          priceInCents: 250000,
          sellerId: "seller-1",
          categoryId: "category-1",
          status: "AVAILABLE",
        },
      ]),
    };

    const productListingRepository =
      new ProductListingTypeOrmRepository(repository as any);

    const result = await productListingRepository.findAll();

    expect(repository.find).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Notebook");
  });
});