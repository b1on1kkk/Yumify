import { IsNumber } from 'class-validator';

export class ProductDto {
  @IsNumber()
  readonly product_id: number;

  @IsNumber()
  readonly quantity: number;
}
