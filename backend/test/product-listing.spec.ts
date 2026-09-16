import { ProductListing, ProductListingStatus } from "../src/modules/produtos/dominio/entities/product-listing.entity.js"

describe("ProductListing", ()=> {

    it("Não deve permitir anuncio sem título", ()=> {
        expect(()=>
        ProductListing.create({
            title: "",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        }),
    ).toThrow("O título do anuncio é obrigatorio.")
    })

    it("Deve criar um anuncio valido", ()=> {
        const listing = ProductListing.create({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada em ótimo estadi",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        expect(listing).toBeInstanceOf(ProductListing)
    })

    it("Deve iniciar com status AVAILABLE", ()=> {
        const listing = ProductListing.create({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada em ótimo estadi",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        expect(listing.status).toBe("AVAILABLE")
    })

    it("Não deve permitir preço negativo", ()=> {
        expect(()=>
        ProductListing.create({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada",
            priceInCents: -50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        }),
    ).toThrow("O preço não pode ser negativo.")
    })

    it("Não deve permitir anuncio sem descrição.", ()=> {
        expect(()=>
        ProductListing.create({
            title: "Bicicleta Caloi",
            description: "",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        }),
    ).toThrow("A descrição do anuncio é obrigatoria.")
    })

    it("Não deve permitir anuncio sem vendedor.", ()=> {
        expect(()=>
        ProductListing.create({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "",
            categoryId: "category-1"
        }),
    ).toThrow("O vendedor é obrigatoria.")
    })

    it("Não deve permitir anuncio sem categoria.", ()=> {
        expect(()=>
        ProductListing.create({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: ""
        }),
    ).toThrow("A categoria é obrigatoria.")
    })

    it("Deve marcar o anuncio como vendido", ()=> {
        const listing = ProductListing.create({
            title: "Bicicleta Caloi",
            description: "Bicicleta usada",
            priceInCents: 50000,
            sellerId: "seller-1",
            categoryId: "category-1"
        })

        listing.markAsSold()

        expect(listing.status).toBe(ProductListingStatus.SOLD)
    })
})