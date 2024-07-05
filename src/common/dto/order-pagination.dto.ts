import { IsEnum, IsOptional } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';
import { OrderStatus } from '../../orders/enums/order.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `Valid status are ${OrderStatus}`,
  })
  status: OrderStatus;
}
