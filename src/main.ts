import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { routes } from './app/routes';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 3000 }
    },
    importProvidersFrom([
      [
        RouterModule.forRoot(routes, {
          onSameUrlNavigation: 'reload',
        }),
        BrowserModule,
        HttpClientModule,
      ]
    ], BrowserAnimationsModule)]
}).catch(err => console.error(err));
