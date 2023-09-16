import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

import { MongooseModule } from '@nestjs/mongoose'; // 1.1 Import the mongoose module
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

const mongo_db = process.env.MONGO_DB;
@Module({
  imports: [
    MongooseModule.forRoot(mongo_db), // 1.2 Setup the database
    ProductModule,
    UserModule,
    AuthModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
