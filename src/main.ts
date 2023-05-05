import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import Mapboxgl from 'mapbox-gl';
const Mapboxgl = require('mapbox-gl');

Mapboxgl.accessToken = environment.mapboxToken;

if (!navigator.geolocation) {
  const textError = 'Navegador no soporta la Geolocation';
  alert(textError);
  throw new Error(textError);
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
