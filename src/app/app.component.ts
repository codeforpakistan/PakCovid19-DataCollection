import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from './services/data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: any = {
    patientID: '',
    confirmationDate: '',
    fullName: '',
    gender: 'male',
    DOB: '',
    resident: '',
    residentProvince: '',
    admittedAtHospital: '',
    admittedAtProvince: '',
    infectionSource: 'source 1',
    currentStatus: 'Infected'
  };
  title = 'PakCovid19-DataCollection';

  constructor(private dataService: DataService) { }

  async onSubmit(f) {
    console.log('submit', this.model);
    if (f.form.valid) {
      console.log('form valid');
      const resp = await this.dataService.createNew(this.model);
      console.log(resp);
      f.reset();
    }
  }

}
