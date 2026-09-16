import { ProductListing } from "../src/modules/produtos/dominio/entities/product-listing.entity.js"
import { InMemoryProductListingRepository } from "../src/modules/produtos/infra/repositories/in-memory-product-listing.repository.js"

describe("InMemoryProductListingRepository", ()=> {

    it("Deve salvar um anuncio", async ()=> {

        const repositorio = new InMemoryProductListingRepository()

        const listing = ProductListing.create({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        await repositorio.create(listing)

        expect(repositorio.items).toHaveLength(1)
        expect(repositorio.items[0]).toBe(listing)
    })
})