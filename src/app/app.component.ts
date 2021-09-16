import { KeyValue } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Regions } from '@shared/models/constants.const';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Country } from './shared/models/country.interface';
import { Store, select } from '@ngrx/store';
import { getCountriesByRegion, getCountryDetailsFromAPI } from './state/country.actions';
import { selectCountriesKeyValuePairs, selectCountry, selectError } from './state/country.selector';
import { AppState } from './state/app.state';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	countries$: BehaviorSubject<KeyValue<string, string>[]> = new BehaviorSubject([{ key: '', value: '' }]);
	detail$: Subject<Country> = new Subject();
	errorMessage: string = '';
	showCountries: boolean = false;
	readonly regions$: BehaviorSubject<KeyValue<string, string>[]> = new BehaviorSubject(Regions);
	private _destroy$: Subject<boolean> = new Subject<boolean>();
	private _countries$ = this._store.pipe(
		select(selectCountriesKeyValuePairs),
		tap((e) => { if (e.length) this.showCountries = true }),
		tap((e) => this.countries$.next(e)),
		takeUntil(this._destroy$)
	);
	private _details$ = this._store.pipe(
		select(selectCountry),
		tap((e) => this.detail$.next(e)),
		takeUntil(this._destroy$)
	);
	private _lastSelectedRegion: string = '';
	private _errorMessage$ = this._store.pipe(
		select(selectError),
		tap((e) => this.errorMessage = e?.statusText),
		takeUntil(this._destroy$)
	);

	constructor(
		private _store: Store<AppState>
	) {
	}

	ngOnInit() {
		this._countries$.subscribe();
		this._details$.subscribe();
		this._errorMessage$.subscribe();
	}

	ngOnDestroy() {
		this._destroy$.next(true);
		this._destroy$.unsubscribe();
	}

	$$displayCountries(countryName: string) {
		this._store.dispatch(getCountryDetailsFromAPI({ countryName }));
	}

	$$getCountries(region: string) {
		if (this._lastSelectedRegion === region) return;
		this._lastSelectedRegion = region;
		this._store.dispatch(getCountriesByRegion({ region }));
	}
}
