import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountriesEndpoint, Region } from './models/constants.const';
import { Country } from './models/country.interface';

@Injectable()
export class CountryService {
	constructor(private _httpClient: HttpClient) { }

	getCountries(region: string): Observable<KeyValue<string, string>[]> {
		const url: string = (region === Region.ASIA) ? CountriesEndpoint.ASIAN_COUNTRIES : CountriesEndpoint.EUROPEAN_COUNTRIES;
		return this._httpClient.get<Country[]>(url)
			.pipe(
				map((country) => this._getKeyValuePairs(country))
			);
	}

	getDetailsOfCountry(countryName: string): Observable<Country[]> {
		const url: string = CountriesEndpoint.COUNTRY_DETAILS.concat(countryName, '?fields=name;capital;population;currencies;flag');
		return this._httpClient.get<Country[]>(url);
	}

	private _getKeyValuePairs(countries: Country[]): KeyValue<string, string>[] {
		return countries.map((country) => ({ key: country.name, value: country.name }));
	}
}
