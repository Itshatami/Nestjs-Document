import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { LoggerMiddleware } from "./middlewares/logger.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.use(new LoggerMiddleware());
  await app.listen(3000);
}
bootstrap();
