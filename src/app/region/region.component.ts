import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'region',
	templateUrl: './region.component.html',
	styleUrls: ['./region.component.scss'],
})
export class RegionComponent {
	@Input() label: string = '';
	@Input('options') options$: Observable<KeyValue<string, string>[]> = new Observable();
	@Output('selected') selectionChange$: EventEmitter<string> = new EventEmitter();

	$$selectionChange(value: string) {
		this.selectionChange$.emit(value);
	}
}
