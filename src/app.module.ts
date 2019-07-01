import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    LocationsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: './gql/schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
