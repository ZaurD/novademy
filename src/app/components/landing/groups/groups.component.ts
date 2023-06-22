import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  buraxilish: boolean = true;
  firstGroup: boolean = false;
  secondGroup: boolean = false;
  thirdGroup: boolean = false;
  fourthGroup: boolean = false;
  buttonGroup1: string = '#E4005C';
  buttonGroup2: string = '#EAEAEA';
  buttonGroup3: string = '#EAEAEA';
  buttonGroup4: string = '#EAEAEA';
  buttonGroup5: string = '#EAEAEA';

  constructor() { }

  ngOnInit(): void {
  }
  clickBuraxilish() {
    this.buraxilish = true;
    this.firstGroup = false;
    this.secondGroup = false;
    this.thirdGroup = false;
    this.fourthGroup = false;
    this.buttonGroup1 = "#E4005C";
    this.buttonGroup2 = '#EAEAEA';
    this.buttonGroup3 = '#EAEAEA';
    this.buttonGroup4 = '#EAEAEA';
    this.buttonGroup5 = '#EAEAEA';
  }

  clickFirstGroup() {
    this.buraxilish = false;
    this.firstGroup = true;
    this.secondGroup = false;
    this.thirdGroup = false;
    this.fourthGroup = false;
    this.buttonGroup1 = '#EAEAEA';
    this.buttonGroup2 = "#E4005C";
    this.buttonGroup3 = '#EAEAEA';
    this.buttonGroup4 = '#EAEAEA';
    this.buttonGroup5 = '#EAEAEA';
  }

  clickSecondGroup() {
    this.buraxilish = false;
    this.firstGroup = false;
    this.secondGroup = true;
    this.thirdGroup = false;
    this.fourthGroup = false;
    this.buttonGroup1 = '#EAEAEA';
    this.buttonGroup2 = '#EAEAEA';
    this.buttonGroup3 = "#E4005C";
    this.buttonGroup4 = '#EAEAEA';
    this.buttonGroup5 = '#EAEAEA';
  }

  clickThirdGroup() {
    this.buraxilish = false;
    this.firstGroup = false;
    this.secondGroup = false;
    this.thirdGroup = true;
    this.fourthGroup = false;
    this.buttonGroup1 = '#EAEAEA';
    this.buttonGroup2 = '#EAEAEA';
    this.buttonGroup3 = '#EAEAEA';
    this.buttonGroup4 = "#E4005C";
    this.buttonGroup5 = '#EAEAEA';
  }

  clickFourthGroup() {
    this.buraxilish = false;
    this.firstGroup = false;
    this.secondGroup = false;
    this.thirdGroup = false;
    this.fourthGroup = true;
    this.buttonGroup1 = '#EAEAEA';
    this.buttonGroup2 = '#EAEAEA';
    this.buttonGroup3 = '#EAEAEA';
    this.buttonGroup4 = '#EAEAEA';
    this.buttonGroup5 = "#E4005C"
  }


}
