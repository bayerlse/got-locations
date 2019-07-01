import { Injectable, HttpException } from '@nestjs/common';
import { LOCATIONS } from '../mocks/locations.mock';
import { LocationDTO } from './dto/location-d-t.o';

@Injectable()
export class LocationsService {
  private readonly locations = LOCATIONS;

  getLocations(): Promise<LocationDTO[]> {
    return new Promise(resolve => {
      resolve(this.locations);
    });
  }

  getLocation(bookID): Promise<LocationDTO> {
    const id = Number(bookID);
    return new Promise(resolve => {
      const location = this.locations.find(
        currLocation => currLocation.id === id,
      );
      if (!location) {
        throw new HttpException('Location does not exist!', 404);
      }
      resolve(location);
    });
  }

  addLocation(location): Promise<LocationDTO[]> {
    return new Promise(resolve => {
      this.locations.push(location);
      resolve(this.locations);
    });
  }
}
