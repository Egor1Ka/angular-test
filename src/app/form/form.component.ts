import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formData = {
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    email: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data: ', this.formData);
    } else {
      console.log('Form is not valid', this.formData);
    }
  }

  isFormValid(form: NgForm): boolean | null {
    return form.valid;
  }
}
