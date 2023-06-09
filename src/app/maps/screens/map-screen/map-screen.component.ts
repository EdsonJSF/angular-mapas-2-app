import { Component } from '@angular/core';

import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styles: [],
})
export class MapScreenComponent {
  public get isUserLocationReady(): boolean {
    return this.PlacesService.isUserLocationReady;
  }

  constructor(private PlacesService: PlacesService) {}
}
