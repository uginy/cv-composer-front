import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/shared/_services';
import { User, Role } from '@app/shared/_models';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: User;
  status = false;
  sub;

  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: ['home'],
      routerLinkActiveOptions: 'active',
      visible: true
    },
    {
      label: 'CV Builder',
      routerLink: ['cvbuilder'],
      routerLinkActiveOptions: 'active',
      visible: false
    }
  ];

  setVisible(label: string, status: boolean): void {
    this.items.map(el => {
      if (el.label !== label) {
        el.visible = status;
      }
    });
  }
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.sub = this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      if (this.currentUser && this.currentUser !== null) {
        this.setVisible('Home', true);
      } else {
        this.setVisible('Home', false);
      }
      return this.currentUser;
    });
  }

  ngOnInit() {}

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
