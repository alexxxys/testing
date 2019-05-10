import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  public numbers = Array.from(Array(20), (x, index) => index + 1);
  public files: File[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  changeAreaNumbers(val) {
    const lines = val.value.split('\n');
    const count = lines.length;
    if (count > 19) {
      this.numbers = Array.from(Array(count), (x, index) => index + 1);
    } else {
      this.numbers = Array.from(Array(20), (x, index) => index + 1);
    }
  }

  changeFile(file) {
    if (file.files[0]) {
      this.files.push(file.files[0]);
    }
    console.log(this.files);
  }

}
