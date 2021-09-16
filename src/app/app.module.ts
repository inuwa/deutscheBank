import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './shared/country.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { countryKeyValueReducer, countryReducer } from './state/country.reducer';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './state/country.effect';
@NgModule({
	declarations: [
		AppComponent,
		RegionComponent,
		CountryDetailsComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		MatButtonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatSelectModule,
		StoreModule.forRoot({
			countryKeyValuePairs: countryKeyValueReducer,
			country: countryReducer
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([CountryEffects])
	],
	providers: [CountryService],
	bootstrap: [AppComponent]
})
export class AppModule { }
