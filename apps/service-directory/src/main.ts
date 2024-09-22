import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';



//hybrid setup that listens for both http requests on 3002, and a microservice application listening to the nestjs message bus on 3005

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3005
    }
  })
  await app.startAllMicroservices();
  await app.listen(3002);
}
bootstrap();
