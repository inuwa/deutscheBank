import { KeyValue } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Country } from '@app/shared/models/country.interface';
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectCountriesKeyValuePairs = createSelector(
	(state: AppState) => state.countryKeyValuePairs,
	(countriesKeyValuePairs: KeyValue<string, string>[]) => countriesKeyValuePairs,
);

export const selectCountry = createSelector(
	(state: AppState) => state.country,
	(country: Country) => country
);

export const selectError = createSelector(
	(state: AppState) => state.error,
	(error: HttpErrorResponse) => error
);
