import { Controller } from '@nestjs/common';
import { CuentasService } from './cuentas.service';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}
}
