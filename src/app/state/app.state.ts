import { KeyValue } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Country } from '@app/shared/models/country.interface';

export interface AppState {
	countryKeyValuePairs: KeyValue<string, string>[];
	country: Country;
	error: HttpErrorResponse;
}
