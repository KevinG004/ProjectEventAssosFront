import { Component } from '@angular/core';
import {
	NgbDropdown,
	NgbDropdownToggle,
	NgbDropdownMenu,
	NgbDropdownItem,
	NgbDropdownButtonItem,
} from '@ng-bootstrap/ng-bootstrap/dropdown';


@Component({
  selector: 'app-navbar',
	imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
