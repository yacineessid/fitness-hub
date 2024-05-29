import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaschboardComponent } from './daschboard/daschboard.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { NutritionTipsComponent } from './nutrition-tips/nutrition-tips.component';
import { FitnessGuidanceComponent } from './fitness-guidance/fitness-guidance.component';

const routes: Routes = [
  { path: '/', component: DaschboardComponent },
  { path: 'dashboard', component: DaschboardComponent },
  { path: 'exercices', component: ExercicesComponent },
  { path: 'nutrition-tips', component: NutritionTipsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'Fitness-guidance', component: FitnessGuidanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
