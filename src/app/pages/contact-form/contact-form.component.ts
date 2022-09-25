import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUs } from 'src/app/model/cmspage.module';
import { ApiService } from '../../service/api.service';

import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
("@angular/material/dialog");


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  productForm!: FormGroup;
  model = new ContactUs();
  _contactus: ContactUs[] = [];
  allContactUs: any;
  submitted = false;
  error!: {};
  allcontactus!: any;

  // email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private api: ApiService, modalService: NgbModal,
    private formBuilder: FormBuilder, private router: Router, private httpClient: HttpClient) {
    this.productForm = this.formBuilder.group({
      currentDate: new Date(),
      name: ["", Validators.required],
      emaila: ["", Validators.required],
      subject: ["", Validators.required],
      comment: ["", Validators.required],
    });
  }

  ngOnInit(): void {
   // this.getAllContactUS();
  }

  onSubmit(): any {
    if (this.productForm.valid) {
      this.api.AddItem(this.productForm.value)
        .subscribe(() => {
          console.log('Data added successfully!')
          this.productForm.reset();
        }, (err) => {
          console.log(err);
        });

    } else {
      this.validateAllFormFields(this.productForm);
    }
  }

  getAllContactUS() {
    this.api.Getitem().subscribe(res => {
    });  
  }

  isFieldValid(field: string) {
    return !this.productForm.get(field)?.valid && this.productForm.get(field)?.touched;
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
