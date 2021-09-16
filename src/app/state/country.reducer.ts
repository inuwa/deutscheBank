import { KeyValue } from '@angular/common';
import { createReducer, on } from '@ngrx/store';
import { getCountries, getCountryDetails, getErrorMessages } from './country.actions';
import { Country } from '../shared/models/country.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const initialCountryKeyValueState: ReadonlyArray<KeyValue<string, string>> = [];
export const initialCountryState: Readonly<Country> = {
	currencies: [],
	flag: '',
	name: '',
	capital: '',
	population: 0
};

export const initialErrorState = new HttpErrorResponse({});

export const countryKeyValueReducer = createReducer(
	initialCountryKeyValueState,
	on(getCountries, (state, { countries }) => [...countries]),
);

export const countryReducer = createReducer(
	initialCountryState,
	on(getCountryDetails, (state, { country }) => ({ ...country }))
);

export const errorReducer = createReducer(
	initialErrorState,
	on(getErrorMessages, (state, { error }) => ({ ...error }))
);
