import { Controller } from '@nestjs/common';
import { DetalleOrdenCompraService } from './detalle_orden_compra.service';

@Controller('detalle-orden-compra')
export class DetalleOrdenCompraController {
  constructor(private readonly detalleOrdenCompraService: DetalleOrdenCompraService) {}
}
