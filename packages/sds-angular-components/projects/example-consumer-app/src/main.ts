import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { defineCustomElements } from 'sds-web-components/loader';

import 'sds-web-components/dist/sds/sds.css';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));

defineCustomElements(window);
