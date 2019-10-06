import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvBuilderComponent } from '@app/features/cv-builder/cv-builder.component';
import { AuthGuard } from '@app/shared/_helpers';

const routes: Routes = [
  {
    path: '',
    component: CvBuilderComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CvBuilderRoutingModule {}
