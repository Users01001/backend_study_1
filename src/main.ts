import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const server_num = '3000';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(server_num, () => {
    console.log('%d번 포트에서 실행 중!', server_num)
  });
}
bootstrap();
