import { Injectable } from '@angular/core';

import { Feature, PlacesResponse } from '../interfaces/places.interface';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';

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

  constructor(
    private PlacesApiClient: PlacesApiClient,
    private mapService: MapService
  ) {
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
    if (!query) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }
    if (!this.userLocation) throw Error('No hay userLocation');

    this.isLoadingPlaces = true;

    this.PlacesApiClient.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.userLocation.join(','),
      },
    }).subscribe((resp) => {
      this.isLoadingPlaces = false;
      this.places = resp.features;

      this.mapService.creteMarkersFromPlaces(this.places, this.userLocation!);
    });
  }
}
