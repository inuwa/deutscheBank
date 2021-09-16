import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryService } from '@app/shared/country.service';
import { ActionType } from '@app/shared/models/constants.const';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { getCountries, getCountryDetails, getErrorMessages } from './country.actions';

@Injectable()
export class CountryEffects {
	getCountries$ = createEffect(() => this._actions$.pipe(
		ofType(ActionType.GET_COUNTRIES_BY_REGION),
		mergeMap(({ payload }) =>
			this._countryService.getCountries(payload)
				.pipe(
					map((countryKeyValuePairs) => getCountries({ countries: countryKeyValuePairs })),
					catchError((error: HttpErrorResponse) => of(getErrorMessages({ error })))
				)
		)
	));

	getCountryDetails$ = createEffect(() => this._actions$.pipe(
		ofType(ActionType.GET_COUNTRY_DETAILS_FROM_API),
		mergeMap(({ type, countryName }) => this._countryService.getDetailsOfCountry(countryName)
			.pipe(
				map(([country]) => getCountryDetails({ country })),
				catchError((error: HttpErrorResponse) => of(getErrorMessages({ error })))
			)
		)
	));

	constructor(
		private _actions$: Actions,
		private _countryService: CountryService
	) { }
}
