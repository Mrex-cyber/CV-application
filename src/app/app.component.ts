import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my second Home';

  public news: string[] = [
    "Valentine was made CV-application",
    "T&PTeam is raising so fast",
    "+245 vacancies for a month!"
  ];


}
