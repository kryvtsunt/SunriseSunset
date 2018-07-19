import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {APIServiceClient} from '../services/APIServiceClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private searchServie: APIServiceClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
