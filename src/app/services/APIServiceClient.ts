import {Injectable} from '@angular/core';

@Injectable()
export class APIServiceClient {

  getAPIData(id: String) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=01202464e80fb52cd90af159ba329661'
    return fetch(url).then(response => response.json());
  }
}
