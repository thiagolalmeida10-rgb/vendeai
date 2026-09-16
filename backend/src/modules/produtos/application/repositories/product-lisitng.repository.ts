import { ProductListing } from "../../dominio/entities/product-listing.entity.js";

export abstract class ProductListingRepository {
    abstract create(productlisting: ProductListing): void
    abstract findAll(): Promise<ProductListing[]>
}