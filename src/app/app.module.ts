import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EquationSolverComponent } from './equation-solver/equation-solver.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EquationSolverComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
