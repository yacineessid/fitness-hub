import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DaschboardComponent } from './daschboard/daschboard.component';
import { FormsModule } from '@angular/forms';
import { ExercicesComponent } from './exercices/exercices.component';
import { NutritionTipsComponent } from './nutrition-tips/nutrition-tips.component';
import { HeaderComponent } from './header/header.component';
import { FitnessGuidanceComponent } from './fitness-guidance/fitness-guidance.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DaschboardComponent,
    ExercicesComponent,
    NutritionTipsComponent,
    HeaderComponent,
    NutritionTipsComponent,
    FitnessGuidanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
