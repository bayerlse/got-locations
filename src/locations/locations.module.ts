import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { LocationsResolver } from './locations.resolver';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService, LocationsResolver],
})
export class LocationsModule {}
