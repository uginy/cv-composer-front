import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class FormComponent implements OnInit {
  @Output() mycv = new EventEmitter();

  activeIndex = 0;
  skills: [];
  selectedTab;
  resps;

  interests: FormArray;
  public cv: FormGroup;
  date = new Date(new Date());

  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.cvForm();
    this.mycv.emit(this.cv);
  }

  cvForm() {
    this.cv = this.fb.group({
      header: this.fb.group({
        firstname: ['Ivan', [Validators.required]],
        lastname: ['Ivanov', [Validators.required]],
        position: ['Frontend Developer', [Validators.required]],
        experience: ['2', [Validators.required]]
      }),
      contacts: this.fb.group({
        country: ['Israel'],
        city: ['Tel Aviv'],
        email: ['mail@gmail.com', [Validators.email, Validators.required]],
        skype: ['skypeid'],
        linkedin: ['www.linkedin.com/in/id']
      }),
      skills: this.fb.array(['Angular', 'JavaScript', 'MongoDB']),
      experience: this.fb.array([
        'Frontend: Angular 2+, HTML5 / CSS3 / SASS, JS ES6, TypeScript',
        'Backend: Node.js (Express) + MongoDB',
        'Technologies: Amazon AWS, FireBase, VOIP, Paypal, Stripe, Amplitude, Git',
        'CMS: Wordpress, Drupal',
        'Experienced with Agile development and Scrum methodologies',
        'Project management and Internet marketing skills'
      ]),
      languages: this.fb.array([
        this.fb.group({
          name: ['English'],
          proficiency: ['5']
        }),
        this.fb.group({
          name: ['Hebrew'],
          proficiency: ['2']
        }),
        this.fb.group({
          name: ['Russian'],
          proficiency: ['5']
        })
      ]),
      interests: this.fb.array(['Sport', 'Reading', 'Swiming']),
      professional: this.fb.array([
        this.fb.group({
          position: ['Full-stack developer'],
          company: ['Some Company 1 Inc.'],
          start_date: [this.date],
          end_date: [this.date],
          direction: ['Direction 1'],
          project: ['Project 1'],
          responsibilities: this.fb.array([
            this.fb.control(['One']),
            this.fb.control(['Two']),
            this.fb.control(['Three'])
          ])
        }),
        this.fb.group({
          position: ['Frontent Developer'],
          company: ['Some Company 2 Inc.'],
          start_date: [this.date],
          end_date: [this.date],
          direction: ['Direction 2'],
          project: ['Project 2'],
          responsibilities: this.fb.array([
            this.fb.control(['One']),
            this.fb.control(['Two']),
            this.fb.control(['Three'])
          ])
        }),
        this.fb.group({
          position: ['Junior Frontend Developer'],
          company: ['Some Company 3 Inc.'],
          start_date: [this.date],
          end_date: [this.date],
          direction: ['Direction 3'],
          project: ['Project 3'],
          responsibilities: this.fb.array([
            this.fb.control(['One']),
            this.fb.control(['Two']),
            this.fb.control(['Three'])
          ])
        })
      ]),
      education: this.fb.array([
        this.fb.group({
          name: ['Technion Haifa1'],
          edu_start_date: [new Date()],
          edu_end_date: [new Date()]
        }),
        this.fb.group({
          name: ['Technion Haifa2'],
          edu_start_date: [new Date()],
          edu_end_date: [new Date()]
        })
      ])
    });
  }

  get cvLanguages() {
    return this.cv.get('languages') as FormArray;
  }

  get cvSkills(): FormArray {
    return this.cv.get('skills') as FormArray;
  }

  get cvInterests(): FormArray {
    return this.cv.get('interests') as FormArray;
  }

  get cvExperience() {
    return this.cv.get('experience') as FormArray;
  }

  get cvProfessional() {
    return this.cv.get('professional') as FormArray;
  }

  get cvEducation() {
    return this.cv.get('education') as FormArray;
  }

  onAddLanguage() {
    this.cvLanguages.push(
      this.fb.group({
        name: ['Language'],
        proficiency: ['1']
      })
    );
  }

  onAddProfessionalExperience() {
    this.cvProfessional.push(
      this.fb.group({
        position: [''],
        company: [''],
        start_date: [this.date],
        end_date: [this.date],
        direction: [''],
        project: [''],
        responsibilities: this.fb.array([])
      })
    );
  }

  onAddEducation() {
    this.cvEducation.push(
      this.fb.group({
        name: [''],
        edu_start_date: [this.date],
        edu_end_date: [this.date]
      })
    );
  }

  onAddSummaryExperience() {
    this.cvExperience.push(this.fb.control('Description of summary text'));
  }

  onAddResponsibility(idr: number) {
    this.resps = ((this.cv.controls.professional as FormArray).controls[
      idr
    ] as FormArray).controls;
    const { responsibilities } = this.resps;
    responsibilities.push(this.fb.control(['One']));
  }

  onDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.onDeleteProfessionalExperience(id);
        this.selectedTab = 0;
      }
    });
  }
  onDeleteLanguage(id: number) {
    (this.cv.controls.languages as FormArray).removeAt(id);
  }

  onDeleteSummaryExperience(id: number) {
    (this.cv.controls.experience as FormArray).removeAt(id);
  }

  onDeleteProfessionalExperience(id: number) {
    (this.cv.controls.professional as FormArray).removeAt(id);
  }

  onDeleteEducation(id: number) {
    (this.cv.controls.education as FormArray).removeAt(id);
  }

  onDeleteResponsibility(idr: number, id: number) {
    this.resps = ((this.cv.controls.professional as FormArray).controls[
      idr
    ] as FormArray).controls;
    const { responsibilities } = this.resps;
    responsibilities.removeAt(id);
  }

  onSubmit(value) {
    //console.log(value);
  }

  get diagnostic() {
    return JSON.stringify(this.cv.value);
  }
}
