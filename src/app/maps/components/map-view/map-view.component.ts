import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map, Popup, Marker } from 'mapbox-gl';

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
      zoom: 14,
    });

    const popup = new Popup().setHTML(/*html*/ `
      <h6>Aquí estoy</h6>
      <span>Estoy en este lugar del mundo</span>
    `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.userLocation)
      .setPopup(popup)
      .addTo(map);
  }
}
