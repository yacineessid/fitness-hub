import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {
  exercises: any[] = [];
  selectedDifficulty: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.data) {
      this.exercises = state.data;
      this.selectedDifficulty = state.selectedDifficulty;
    }
  }
}
