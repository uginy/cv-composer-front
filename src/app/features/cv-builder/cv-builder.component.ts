import { ResumeComponent } from './resume/resume.component';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/models/';
import { CvSelected } from '@app/store/models/';
import {
  LoadCvSelectedTabAction,
  UpdateCvSelectedTabAction
} from '@app/store/actions';
import { CvState } from '@app/store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvBuilderComponent implements OnInit {
  cv: FormGroup;
  selectedTab: any;
  form = false;
  sub: any;
  @ViewChild('resume', { static: false }) child: ResumeComponent;
  constructor(private store: Store<AppState>) {}

  handleChange(event: any) {
    this.store.dispatch(new UpdateCvSelectedTabAction(event.index));
  }

  onLoadCv(event) {
    this.cv = event;
  }

  ngOnInit() {
    this.store.select('cv').subscribe(el => {
      this.selectedTab = el.selectedTab;
    });
  }

  onPdfConvert() {
    this.child.captureScreen();
  }
}
