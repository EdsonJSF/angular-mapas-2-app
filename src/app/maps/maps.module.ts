import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { HomeComponent } from './pages/home/home.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';

@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    HomeComponent,
    BtnMyLocationComponent,
    AngularLogoComponent,
  ],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}
