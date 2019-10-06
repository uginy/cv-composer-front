import { CvBuilderRoutingModule } from '@app/features/cv-builder/cv-builder.routing.module';
import { NgModule } from '@angular/core';
import { PrimengModule } from '@app/shared/_modules/primeng.module';
import { MaterialModule } from '@app/shared/_modules/mat.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from '@app/features/cv-builder/form/form.component';
import { ResumeComponent } from '@app/features/cv-builder/resume/resume.component';
import { CvBuilderComponent } from '@app/features/cv-builder/cv-builder.component';
import { LevelBarDirective } from '@app/components/directive/lbar.directive';

@NgModule({
  declarations: [
    FormComponent,
    ResumeComponent,
    CvBuilderComponent,
    LevelBarDirective
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CvBuilderRoutingModule
  ],
  exports: [RouterModule]
})
export class CvBuilderModule {}
