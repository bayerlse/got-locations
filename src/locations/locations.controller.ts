import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationDTO } from './dto/location-d-t.o';

@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) { }

  @Get()
  async locations() {
    const locations = await this.locationsService.getLocations();
    return locations;
  }

  @Get(':locationId')
  async location(@Param('locationId') locationId) {
    const location = await this.locationsService.getLocation(locationId);
    return location;
  }

  @Post()
  async addLocation(@Body() createLocationDTO: LocationDTO) {
    const location = await this.locationsService.addLocation(createLocationDTO);
    return location;
  }

}
