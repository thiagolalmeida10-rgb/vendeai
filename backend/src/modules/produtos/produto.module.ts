import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductListingController } from "./presentation/controllers/product-listing.controller.js";
import { CreateProductListingUseCase } from "./application/use-case/create-product-listing.use-case.js";
import { FindAllProductListingsUseCase } from "./application/use-case/find-all-product-listing.use-case.js";
import { ProductListingRepository } from "./application/repositories/product-lisitng.repository.js";
import { ProductListingTypeOrmRepository } from "./infra/database/typeorm/repositories/product-listing-typeorm.repository.js";
import { ProductListingSchema } from "./infra/database/typeorm/entities/product-listing-schema.js";

@Module({

    imports: [
        TypeOrmModule.forFeature([ProductListingSchema])
    ],
    controllers:[ProductListingController],

    providers:[
        CreateProductListingUseCase,
        FindAllProductListingsUseCase,
        {
            provide: ProductListingRepository,
            useClass: ProductListingTypeOrmRepository
        },
    ],
    exports:[
        ProductListingRepository
    ]
})

export class ProdutoModule{}