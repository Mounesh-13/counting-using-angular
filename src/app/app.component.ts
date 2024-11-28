import { Component } from '@angular/core';
import { CounterComponent } from './counter.component'; // Import CounterComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent], // Include CounterComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
}
