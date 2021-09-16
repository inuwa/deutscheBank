import { KeyValue } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ActionType } from '@app/shared/models/constants.const';
import { createAction, props } from '@ngrx/store';
import { Country } from '../shared/models/country.interface';

export const getCountriesByRegion = createAction(ActionType.GET_COUNTRIES_BY_REGION, props<{ region: string }>());
export const getCountries = createAction(ActionType.GET_COUNTRIES, props<{ countries: KeyValue<string, string>[] }>());
export const getCountryDetailsFromAPI = createAction(ActionType.GET_COUNTRY_DETAILS_FROM_API, props<{ countryName: string }>());
export const getCountryDetails = createAction(ActionType.GET_COUNTRY, props<{ country: Country }>());
export const getErrorMessages = createAction(ActionType.ERROR_MESSAGE, props<{ error: HttpErrorResponse }>())