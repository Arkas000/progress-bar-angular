import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number = 0;

  ngOnInit() {}

  clampProgress() {
    return Math.max(
      Math.min(this.progress, Math.max(0, 100)),
      Math.min(0, 100)
    );
  }
}
