import { NgModule, provideAppInitializer } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'sds-web-components/loader';

@NgModule({
  imports: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: provideAppInitializer,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
})
export class ComponentLibraryModule {}
