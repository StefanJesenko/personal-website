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

      switch (this.input) {
        case 'clear':
          this.app.lastInputs = [];
          break;
        case 'help':
            this.app.lastInputs.push('help \nAvailable commands: clear, help, ls, open [foldername]');
          break;
        case 'ls':
            this.app.lastInputs.push('ls\n|\n|__ about me \n|\n|__ projects \n|\n|__ contact');
            break;
        case 'open about me':
            this.app.lastInputs.push('open about me\nHello! I am an 18 year old software engineer from Switzerland.\nI am doing the IMS in Baden and in August 2025 I will start my apprenticeship as a software engineer at finnova AG Bankware in Lenzburg.\nI am passionate about AI, datascience and backend developement, thats why this website looks like it is.\nWhen I am not coding, I do sports, I ride my motorbike or I am studying languages, currecntly I am working on Chinese, so for those who understand 你好，很高兴认识你.');
            break;
        case 'open projects':
            this.app.lastInputs.push('open projects\n|\n|__ brain_tumor_AI\n  description:\n  A small AI project I did with a friend, where we trained an AI to distiguish between three types of brain-cancer-typres and a healthy brain. \n|\n|__ fileSharingApp\n  description:\n  A file sharing app used to share small files with people that are in the same network using a TCP connection, you can also text in this App if you want to.  \n|\n|__ Huffman-coding\n  description:\n  A project I did in school, where me and two onthers created a NuGet package for Huffman coding. ');
            break;
        case 'open contact':
            this.app.lastInputs.push('open contact\nYou can reach me at\nstefan@jesenko.ch\nLinkedIn: [insert link]\n GitHub: https://github.com/StefanJesenko');
            break;    
        default:
          this.app.lastInputs.push(this.input);
          break;
      }
     
      console.log(this.app.lastInputs);
      console.log(this.input);
      this.input = '';
     
    }
  }
}
