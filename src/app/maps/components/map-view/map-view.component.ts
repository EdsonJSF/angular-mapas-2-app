import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';

import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('map') mapDivEl!: ElementRef;

  constructor(private placesService: PlacesService) {}

  ngAfterViewInit(): void {
    if (!this.placesService.userLocation)
      throw Error('No hay placesService.userLocation');

    const map = new Map({
      container: this.mapDivEl.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesService.userLocation,
      zoom: 2,
    });
  }
}
