import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductosModule } from './productos/productos.module';
import { CuentasModule } from './resource/cuentas/cuentas.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, ClientModule, CuentasModule, ProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
