import { AdminComponent } from '@app/auth/admin/admin.component';
import { AdminRoutingModule } from '@app/auth/admin/admin.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AdminRoutingModule],
  exports: [RouterModule]
})
export class AdminModule {}
