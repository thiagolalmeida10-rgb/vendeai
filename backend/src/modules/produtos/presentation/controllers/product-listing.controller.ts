import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductListingUseCase } from "../../application/use-case/create-product-listing.use-case.js";
import { CreateProductListingDto } from "../dtos/create-product-listing.dto.js";
import { FindAllProductListingsUseCase } from "../../application/use-case/find-all-product-listing.use-case.js";

@Controller("produtos")
export class ProductListingController{
    
    constructor(
        private readonly createProductListingUseCase: CreateProductListingUseCase,
        private readonly findAllProductListingCase: FindAllProductListingsUseCase
    ){}

    @Post()
    create(@Body() data: CreateProductListingDto){
        return this.createProductListingUseCase.execute(data)
    }

    @Get()
    findAll(){
        return this.findAllProductListingCase.execute()
    }
}