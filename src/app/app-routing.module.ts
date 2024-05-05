import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DaschboardComponent } from './daschboard/daschboard.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { NutritionTipsComponent } from './nutrition-tips/nutrition-tips.component';
import { FitnessGuidanceComponent } from './fitness-guidance/fitness-guidance.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DaschboardComponent, canActivate: [AuthGuard] },
  { path: 'exercices', component: ExercicesComponent, canActivate: [AuthGuard] },
  { path: 'nutrition-tips', component: NutritionTipsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'Fitness-guidance', component: FitnessGuidanceComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
