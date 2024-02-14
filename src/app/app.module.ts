import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { MainNavigationComponent } from './navigation/components/main-navigation/main-navigation.component';

@NgModule({
  declarations: [
      AppComponent,
      ProjectsComponent,
      AchievementsComponent,
      AboutComponent,
      MainComponent,
      MainNavigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
