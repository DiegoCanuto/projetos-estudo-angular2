import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsComponent } from './settings/settings.component';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CamelCasePipe,
    SettingsComponent,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ 
    {
     /* provide:LOCALE_ID,
      useValue:'pr-BR',*/
      SettingsService,
      {
        provide:LOCALE_ID,
        deps:[SettingsService],
        useFactory: {settingsService} => SettingsService.getLocale();
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
