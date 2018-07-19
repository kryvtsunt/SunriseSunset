import {Injectable} from '@angular/core';

@Injectable()
export class APIServiceClient {

  // Sunrise sunset API
  getAPIData(lat: number, lng: number) {
    const url = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + ' &formatted=1'
    return fetch(url).then(response => response.json());
  }

  // Google Geocoding API
  getLocation(city: String) {
    const url = 'https://maps.google.com/maps/api/geocode/json?key=AIzaSyCBLdVMhMOKW4BbtLLfSZoYz_pL61Uz4Qk&address=' + city;
    return fetch(url).then(response => response.json());
  }
}
