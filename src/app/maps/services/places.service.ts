import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Feature, PlacesResponse } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  public get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor(private http: HttpClient) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (error) => {
          alert('No se pudo obtner la geolocalización');
          console.log(error);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query: string = '') {
    if (!query) return;

    this.isLoadingPlaces = true;

    this.http
      .get<PlacesResponse>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=5&proximity=-72.21958341937732%2C7.769945998189613&language=es&access_token=pk.eyJ1IjoiZWRzb25qc2YiLCJhIjoiY2xlZnlyeWw5MDB6bzQyczlidTE2YWlwOCJ9.VYbKtB9X2y33gE38z75Pfw`
      )
      .subscribe((resp) => {
        this.isLoadingPlaces = false;
        this.places = resp.features;
      });
  }
}
