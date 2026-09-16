import { Inject } from "@nestjs/common";
import { CreateProductListingData, ProductListing } from "../../dominio/entities/product-listing.entity.js";
import { ProductListingRepository } from "../repositories/product-lisitng.repository.js";

export class CreateProductListingUseCase {

    constructor(
        @Inject(ProductListingRepository)
        private productListingRepository: ProductListingRepository
    ){}

    async execute(data: CreateProductListingData):Promise<ProductListing>{
        
        const lisitng = ProductListing.create(data)

        await this.productListingRepository.create(lisitng)

        return lisitng
    }
}