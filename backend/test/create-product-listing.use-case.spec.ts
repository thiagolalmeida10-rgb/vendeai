import { ProductListingRepository } from "../src/modules/produtos/application/repositories/product-lisitng.repository.js"
import { CreateProductListingUseCase } from "../src/modules/produtos/application/use-case/create-product-listing.use-case.js"
import { ProductListing, ProductListingStatus } from "../src/modules/produtos/dominio/entities/product-listing.entity.js"

describe("CreateProductListingUseCase", ()=>{

    it("Deve criar um anuncio", async ()=>{

        const repositorio: ProductListingRepository = {
            create: vi.fn()
        }

        const useCase = new CreateProductListingUseCase(repositorio)

        const listing = await useCase.execute({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        expect(listing).toBeInstanceOf(ProductListing)
        expect(listing.status).toBe(ProductListingStatus.AVAILABLE)
    })

    it("Deve salvar o anuncio no repositorio", async ()=> {

        const repositorio = {
            create: vi.fn()
        }

        const useCase = new CreateProductListingUseCase(repositorio)

        const listing = await useCase.execute({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        expect(repositorio.create).toHaveBeenCalledWith(listing)
    })
})