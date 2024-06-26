import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrometheusModule} from "@willsoto/nestjs-prometheus";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {LoggingInterceptor} from "./loging.interceptor";

@Module({
  imports: [PrometheusModule.register()],
  controllers: [AppController],
  providers: [AppService,
    {
      provide:APP_INTERCEPTOR, useClass:LoggingInterceptor
    }
  ],
})
export class AppModule {}
