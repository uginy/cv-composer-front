import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/shared/_models';
import { UserService, AuthenticationService } from '@app/shared/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = false;
  currentUser: User;
  userFromApi: User;
  sub;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    if (this.currentUser) {
      this.sub = this.userService
        .getById(this.currentUser.id)
        .pipe(first())
        .subscribe(user => {
          this.loading = false;
          this.userFromApi = user;
        });
    } else {
      this.loading = false;
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
