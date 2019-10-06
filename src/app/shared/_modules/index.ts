import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng.module';
import { MaterialModule } from './mat.module';

@NgModule({
  imports: [PrimengModule, MaterialModule],
  exports: [PrimengModule, MaterialModule]
})
export class SharedModule {}
