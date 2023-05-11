import { Component } from '@angular/core';

import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/places.interface';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styles: [],
})
export class SearchResultsComponent {
  selectedId = '';

  constructor(
    private mapService: MapService,
    private placesService: PlacesService
  ) {}

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  flyTo(place: Feature) {
    this.selectedId = place.id;
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
  }
}
