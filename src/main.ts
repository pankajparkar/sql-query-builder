import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { routes } from './app/routes';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      [
        RouterModule.forRoot(routes),
        BrowserModule,
      ]
    ])]
}).catch(err => console.error(err));
