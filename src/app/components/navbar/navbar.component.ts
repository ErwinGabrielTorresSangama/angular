import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  @Output() clickMenu = new EventEmitter(true);

	clickHamburguer(): void {
		this.clickMenu.emit(true);
	}


}
