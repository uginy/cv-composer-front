import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PdfService } from '@app/shared/_services/pdf.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  @Input() cv: FormGroup;

  captureScreen() {
    this.pdf.captureScreen();
  }

  constructor(private pdf: PdfService) {}
}
