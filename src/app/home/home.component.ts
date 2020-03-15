import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  ngOnInit(): void {
    console.log('inside home')
  }

  async onSubmit(f) {
    console.log('submit', this.model);
    if (f.form.valid) {
      console.log('form valid');
      const resp = await this.dataService.createNew(this.model);
      console.log(resp);
      f.submitted = false;
      f.reset();
    }
  }

}
