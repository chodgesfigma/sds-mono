import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'example-consumer-app';
  disabled = false;

  toggleDisabled = () => {
    this.disabled = !this.disabled;
  };

  handleSubmit = () => {
    alert('submit');
  };
}
