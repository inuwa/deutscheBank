import { KeyValue } from '@angular/common';

export enum ActionType {
	GET_COUNTRIES = '[Country Page] Get',
	GET_COUNTRIES_BY_REGION = '[Country Page] RegionDetails',
	GET_COUNTRY = '[Country Page] Country',
	GET_COUNTRY_DETAILS_FROM_API = '[Country Page] CountryDetails',
	ERROR_MESSAGE = '[Country Page] HttpErrorMessage'
}
export enum CountriesEndpoint {
	ASIAN_COUNTRIES = 'https://restcountries.eu/rest/v2/region/asia',
	EUROPEAN_COUNTRIES = 'https://restcountries.eu/rest/v2/region/europe',
	COUNTRY_DETAILS = 'https://restcountries.eu/rest/v2/name/'
}

export enum Region {
	ASIA = 'Asia',
	EUROPE = 'Europe'
}

export const Regions: KeyValue<string, string>[] = [{ key: 'Europe', value: 'Europe' }, { key: 'Asia', value: 'Asia' }];
