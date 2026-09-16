import { ProductListingRepository } from "../../application/repositories/product-lisitng.repository.js";
import { ProductListing } from "../../dominio/entities/product-listing.entity.js";

export class InMemoryProductListingRepository implements ProductListingRepository {

    public items: ProductListing[] = []

    async create(productListing: ProductListing): Promise<void> {
        this.items.push(productListing)
    }

    findAll(): Promise<ProductListing[]> {
        return this.findAll()
    }
}