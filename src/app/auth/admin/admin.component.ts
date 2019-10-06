import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/shared/_models';
import { UserService } from '@app/shared/_services';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit, OnDestroy {
  loading = false;
  sub;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.sub = this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.loading = false;
        this.users = users;
      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
