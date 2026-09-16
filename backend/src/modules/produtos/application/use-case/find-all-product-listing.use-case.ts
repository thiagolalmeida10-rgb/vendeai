import { Inject } from "@nestjs/common";
import { ProductListing } from "../../dominio/entities/product-listing.entity.js";
import { ProductListingRepository } from "../repositories/product-lisitng.repository.js";

export class FindAllProductListingsUseCase {

    constructor(
        @Inject(ProductListingRepository)
        private productListingRepository: ProductListingRepository
    ){}

    async execute(): Promise<ProductListing[]>{
        return this.productListingRepository.findAll()
    }
}