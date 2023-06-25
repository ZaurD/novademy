import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  answer1: boolean = false; 
  answer2: boolean = false; 
  answer3: boolean = false; 
  answer4: boolean = false; 

  constructor() { }

  ngOnInit(): void {}

  clickAnswer1() {
    this.answer1 = !this.answer1;
  }
  clickAnswer2() {
    this.answer2 = !this.answer2;
  }
  clickAnswer3() {
    this.answer3 = !this.answer3;
  }
  clickAnswer4() {
    this.answer4 = !this.answer4;
  }

}


