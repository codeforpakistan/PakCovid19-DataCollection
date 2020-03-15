import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/data.service'

@Component({
  selector: 'app-non-verified-cases',
  templateUrl: './non-verified-cases.component.html',
  styleUrls: ['./non-verified-cases.component.css']
})
export class NonVerifiedCasesComponent implements OnInit {
  nonVerfiedCases: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNonVerfiedCases();
  }

  async getNonVerfiedCases() {
    try {
      this.nonVerfiedCases = [];
      let result = <any> await this.dataService.getNonVerfiedCases();
      this.nonVerfiedCases = result.body;
      console.log(this.nonVerfiedCases,'non verified cases')
    } catch (error) {
      console.error('Something went wrong in getNonVerfiedCases', error);
    }
  }

  getKeys(notes) {
    if (notes && notes.length > 0) {
      return Object.keys(notes[0]);
    } else {
      return [];
    }
  }

  async updateVerificationFlag(id: String) {
  await this.dataService.markVerify(id);
    await this.getNonVerfiedCases();
  }

}
