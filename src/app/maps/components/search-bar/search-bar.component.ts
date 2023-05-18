import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

import { Feature } from '../../interfaces/places.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent {
  show: boolean = true;
  get places(): Feature[] {
    return this.placesService.places;
  }

  private debounceTimer?: NodeJS.Timeout;

  constructor(private placesService: PlacesService) {}

  onQueryChanged(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.show = true;
      this.placesService.getPlacesByQuery(query);
    }, 350);
  }
}
