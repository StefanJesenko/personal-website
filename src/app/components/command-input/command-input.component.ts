import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-command-input',
  imports: [FormsModule],
  templateUrl: './command-input.component.html',
  styleUrl: './command-input.component.scss'
})
export class CommandInputComponent {

  constructor(public app: AppComponent) {}

  title = 'personal-website';
  input = '';

   onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.input.trim() !== '') {
      this.app.lastInputs.push(this.input);
      console.log(this.app.lastInputs);
      console.log(this.input);
      this.input = '';
    }
  }
}
