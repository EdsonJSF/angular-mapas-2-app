import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styles: [],
})
export class BtnMyLocationComponent {
  constructor() {}

  goToMyLocation() {
    alert('Ir a mi ubicaciíon');
  }
}
