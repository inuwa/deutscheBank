import { Currency } from './currency.interface';

export interface Country {
	currencies: Currency[];
	flag: string;
	name: string;
	capital: string;
	population: number;
}
