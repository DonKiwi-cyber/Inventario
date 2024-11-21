import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedoresModule } from './resource/proveedores/proveedores.module';
import { CuentasModule } from './resource/cuentas/cuentas.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { ProductosModule } from './resource/productos/productos.module';
import { DetalleOrdenCompraModule } from './resource/detalle_orden_compra/detalle_orden_compra.module';
import { InventarioModule } from './resource/inventario/inventario.module';

@Module({
  imports: [AuthModule, ClientModule, CuentasModule, ProductosModule, DetalleOrdenCompraModule, InventarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
