import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {managerMenu, professorMenu, studentMenu} from '../utils/pageMenuItems';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthenticationService} from '../utils/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  title = 'ISTV';
  menuItems: IMenuItem[];
  opened: boolean;

  constructor(private authService: AuthenticationService) {
  }

  ngDoCheck(): void {
    if (window.location.pathname === '/' || window.innerWidth < 600) {
      this.opened = false;

    } else {
      this.opened = true;
      if (this.authService.isCEO()) {
        this.menuItems = professorMenu;
      } else if (this.authService.isProjectManager()) {
        this.menuItems = managerMenu;
      } else {
        this.menuItems = studentMenu;
      }
    }
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }
}
