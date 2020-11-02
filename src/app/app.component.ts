import { Component, VERSION } from "@angular/core";

export enum GenderEnum {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  public genderEnum = GenderEnum;
  public currentGender: GenderEnum;

  constructor() {
    this.setGender(GenderEnum.MALE);
  }

  public setGender(gender: GenderEnum): void {
    this.currentGender = gender;
  }
}
