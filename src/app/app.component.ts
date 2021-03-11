import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  // source progressBar data
  limitOccupances = [75, 33];

  tableRows = [
    {
      name: "LEVEL 3",
      value: "8%",
      previousValue: "7%",
      delta: "-11000",
      rafLimit: "12%",
      date: "12.09.20"
    },
    {
      name: "LEVEL 1",
      value: "8%",
      previousValue: "7%",
      delta: "-11000",
      rafLimit: "12%",
      date: "12.09.20"
    }
  ];

  getLimit(idx: number) {
    return this.limitOccupances[idx];
  }
}
