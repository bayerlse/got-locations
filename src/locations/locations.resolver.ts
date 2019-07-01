import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './models/Location';

@Resolver('Locations')
export class LocationsResolver {
  constructor(private locationsService: LocationsService) { }

  @Query(returns => Location)
  async location(@Args('id') id: string): Promise<Location> {
    const recipe = await this.locationsService.getLocation(Number(id));
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }
}
