import { Repository } from "typeorm";
import { ProductListingRepository } from "../../../../application/repositories/product-lisitng.repository.js";
import { ProductListingSchema } from "../entities/product-listing-schema.js";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductListing } from "../../../../dominio/entities/product-listing.entity.js";

export class ProductListingTypeOrmRepository implements ProductListingRepository{

    constructor(
        @InjectRepository(ProductListingSchema)
        private readonly repositorio: Repository<ProductListingSchema>
    ){}

    async create(productlisting: ProductListing): Promise<void> {
        const lisitng = this.repositorio.create({
            title: productlisting.title,
            description: productlisting.description,
            priceInCents: productlisting.priceInCents,
            sellerId: productlisting.sellerId,
            categoryId: productlisting.categoryId,
            status: productlisting.status
        })

        await this.repositorio.save(lisitng)
    }

    async findAll(): Promise<ProductListing[]>{
        const lisitngs = await this.repositorio.find()

        return lisitngs.map((lisitng)=>{
            return ProductListing.restore({
                title: lisitng.title,
                description: lisitng.description,
                priceInCents: lisitng.priceInCents,
                sellerId: lisitng.sellerId,
                categoryId: lisitng.categoryId,
                status: lisitng.status,
            })
        })
    }
}