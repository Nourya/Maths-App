import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equation-solver',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajout de FormsModule pour ngModel
  templateUrl: './equation-solver.component.html',
  styleUrls: ['./equation-solver.component.scss']
})
export class EquationSolverComponent {
  a: number = 1;
  b: number = 0;
  c: number = 0;
  solution: string = '';

  constructor(private http: HttpClient) {}

  solve() {
    const body = { a: this.a, b: this.b, c: this.c };
    this.http.post<any>('http://localhost:8080/api/equation/solve', body)
      .subscribe(res => this.solution = res.solution);
  }
}
