import { Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommandInputComponent } from "./components/command-input/command-input.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommandInputComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'personal-website';
  lastInputs: string[] = [];
  input = '';
  

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.input.trim() !== '') {
      this.lastInputs.push(this.input);
      console.log(this.lastInputs);
      console.log(this.input);
      this.input = '';
    }
  }
  formatInput(input: string): string {
    return input.replace(/\n/g, '<br>');
  }
}


