import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';
import { MapUpdateComponent } from './components/map/map-update.component';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Google Maps (AGM)
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // Import module
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4kj-S1dA2zd-9uCfb77hQg79xytBnBCg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
