import {Component, OnInit, ViewChild} from '@angular/core';
import {APIServiceClient} from '../services/APIServiceClient';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;


  city: string;
  lng: number;
  lat: number;
  location: Object;
  apiData: Object;

  constructor(private apiService: APIServiceClient) {}

  getLocation() {
    this.apiService.getLocation(this.city)
      .then(res => {
      this.lat = res.results[0].geometry.location.lat;
      this.lng = res.results[0].geometry.location.lng;
      console.log(this.lat);
    })
      .then(() => this.getData());
  }

  getData() {
    this.apiService.getAPIData(this.lat, this.lng)
      .then(result => {
        this.apiData = result;
      });
  }

  // setMapType(mapTypeId: string) {
  //   this.map.setMapTypeId(mapTypeId)
  // }

  setCenter(e:any) {
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.lat, this.lng));
  }

  ngOnInit() {
    this.city = '';

    const mapProp = {
      center: new google.maps.LatLng(50.4501, 30.5234),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
