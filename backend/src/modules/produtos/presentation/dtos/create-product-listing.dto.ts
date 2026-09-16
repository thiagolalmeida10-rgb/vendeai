import { IsInt, IsNotEmpty, IsString, Min } from "class-validator"

export class CreateProductListingDto {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsInt()
    @Min(0)
    priceInCents: number

    @IsString()
    @IsNotEmpty()
    sellerId: string

    @IsString()
    @IsNotEmpty()
    categoryId: string
}