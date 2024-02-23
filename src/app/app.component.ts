import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatComponent],
  template: `
    <details>
      <summary>Chat</summary>
      <app-chat/>
    </details>
  `,
  styles: `
   details {
      position: fixed;
      bottom: 20px;
      left: 20px;
   }
   summary {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 10px;
    width: 400px;
   }
  `
})
export class AppComponent {
}
