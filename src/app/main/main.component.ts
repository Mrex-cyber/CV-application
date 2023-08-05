import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Welcome to my second Home';

  public news: string[] = [
    "New project",
    "Updated README.md",
    "Finished start EnjotingCooking project"
  ];
  constructor() { }

  ngOnInit() {
  }

}
