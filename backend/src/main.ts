import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/http-exception/http-exception.filter';
import * as cors from 'cors';

async function bootstrap() {
  console.log('Starting the server...');
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;
  console.log(`Attempting to listen on port: ${port}`);

  try {
    app.useGlobalFilters(new HttpExceptionFilter());
    app.use(
      cors({
        origin: 'http://localhost:5173', // Frontend URL
        credentials: true, // Allow cookies if needed
      }),
    );
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
}
bootstrap();
