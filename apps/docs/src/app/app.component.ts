import { Component } from '@angular/core';
import { ButtonModule } from '@miraui/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'docs';
}
