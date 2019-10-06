import { NgModule } from '@angular/core';
import { PrimengModule } from '@app/shared/_modules/primeng.module';

import { LoginComponent } from '@app/auth/login/login.component';
import { RegisterComponent } from '@app/auth/register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AuthModule {}
