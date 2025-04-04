import { Component } from '@angular/core';
import { EquationSolverComponent } from './equation-solver/equation-solver.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EquationSolverComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
