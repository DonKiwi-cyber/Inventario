import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentasModule } from './resource/cuentas/cuentas.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, ClientModule, CuentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
