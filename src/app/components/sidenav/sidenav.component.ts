import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private _router: Router) {}
	listMenu = [
		{ name: 'pokemons', path: '/dashboard/pokemons', icon: 'account_circle' },
		{ name: 'Metabots', path: '/dashboard/metabots', icon: 'star_rate' },
		{ name: 'Digimons', path: '/dashboard/digimons', icon: 'article' }
	];

	logout(): void {
		void this._router.navigateByUrl('login');
	}





}
