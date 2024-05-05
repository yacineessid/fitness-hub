import { Component } from '@angular/core';
import { ExerciseService } from '../exercices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daschboard',
  templateUrl: './daschboard.component.html',
  styleUrls: ['./daschboard.component.css']
})
export class DaschboardComponent {
  loading = false;
  constructor(private exerciceService:ExerciseService,private router:Router) { }
  exercises: any[] = [];
  selectedDifficulty: string = '';
  ngOnInit() {

  }

  muscles = [

      {
        name: 'Chest',
        imageUrl: '../../assets/muscles/chest.jpg',
      },

      {
        name: 'lats',
        imageUrl: '../../assets/muscles/latss.jpg',
      },
      {
        name: 'lower_back',
        imageUrl: '../../assets/muscles/back.jpg',
      },
      {
        name: 'Biceps',
        imageUrl: '../../assets/muscles/biceps.jpeg',
      },
      {
        name: 'Triceps',
        imageUrl: '../../assets/muscles/triceps.jpeg',
      },
      {
        name: 'quadriceps',
        imageUrl: '../../assets/muscles/legs.jpg',
      },
      {
        name: 'glutes',
        imageUrl: '../../assets/muscles/glutess.webp',
      },
      {
        name: 'calves',
        imageUrl: '../../assets/muscles/moullet.jpg',
      },
      {
        name: 'abdominals',
        imageUrl: '../../assets/muscles/abs.jpg',
      },

    ];

    getExercises(muscle: string, difficulty: string) {
      this.loading = true;
      console.log(`this,loading`, this.loading);
      this.selectedDifficulty = difficulty;
      this.exerciceService.getExercises(muscle, difficulty).subscribe(
        (data: any) => {
          this.router.navigate(['/exercices'], { state: { data } });
        },
        (error: any) => {
          console.error('Error fetching exercises:', error);
        }
      ).add(() => this.loading = false);
    }
  }


