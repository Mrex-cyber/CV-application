import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my second Home';

  public news: string[] = [
    "New project",
    "Updated README.md",
    "Finished start EnjotingCooking project"
  ];


}
