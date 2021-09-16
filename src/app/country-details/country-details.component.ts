import { Component, Input } from '@angular/core';
import { Country } from '@app/shared/models/country.interface';
import { Observable } from 'rxjs';

@Component({
	selector: 'country-details',
	templateUrl: './country-details.component.html',
	styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {
	@Input('details') detail$: Observable<Country> = new Observable();
	constructor() { }
}
