import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsModule } from "./cats/cats.module";
import { PostModule } from "./post/post.module";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { CatsController } from "./cats/cats.controller";
import { sayWelcome } from "./middlewares/welcome.middleware";

@Module({
  imports: [CatsModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, sayWelcome)
      .exclude(
        { path: "cats", method: RequestMethod.POST },
        { path: "cats", method: RequestMethod.PUT },
      )
      .forRoutes(CatsController);
  }
}
