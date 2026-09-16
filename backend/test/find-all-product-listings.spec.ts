import { ProductListingRepository } from "../src/modules/produtos/application/repositories/product-lisitng.repository.js"
import { FindAllProductListingsUseCase } from "../src/modules/produtos/application/use-case/find-all-product-listing.use-case.js"

describe("Find all product listings",()=>{

    it("Deve retornar todos os produtos", async ()=>{
        
        const productListingRepository = {
            
            create: async () => {},
            findAll: async () => [
                {
                    id: "1",
                    title: "Iphone 13",
                    description: "Iphone usada",
                    priceInCents: 250000,
                    sellerId: "seller-1",
                    categoryId: "category-1",
                    status: "AVAILABLE"
                }
            ]
        }as ProductListingRepository

        const sut = new FindAllProductListingsUseCase(
            productListingRepository
        )

        const resultado = await sut.execute()

        expect(resultado).toHaveLength(1)
        expect(resultado[0].title).toBe("Iphone 13")
    })
})