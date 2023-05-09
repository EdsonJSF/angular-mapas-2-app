import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styles: [],
})
export class BtnMyLocationComponent {
  constructor(
    private mapService: MapService,
    private placesService: PlacesService
  ) {}

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady) throw Error('No hay lng lat');
    if (!this.mapService.isMapReady) throw Error('No hay mapa disponible');

    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
