import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  id: number;
  user: string;
  text: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="chat-container">
      <ul class="chat-list">
        @for (message of messages; track message.id) {
          <li>
            <b>{{ message.user }}:</b> {{ message.text }}
          </li>
        }
      </ul>
      <div class="input-area">
        <input type="text" [(ngModel)]="newMessageText" (keyup.enter)="sendMessage()">
        <button (click)="sendMessage()">Send</button>
      </div>
    </div>
  `,
  styles: `
    .chat-container {
      width: 400px;
      border: 1px solid #ccc;
      padding: 10px;
    }
    
    .chat-list {
      list-style: none;
      padding: 0;
      height: 300px;
      overflow: auto;
    }
    
    .input-area {
      display: flex;
    }
    
    input[type="text"] {
      flex: 1;
    } 
  `
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessageText: string = '';
  currentUser = 'User1'; // You'll likely have a proper user system

  ngOnInit() {}

  sendMessage() {
    if (this.newMessageText.trim()) {
      this.messages.push({
        id: Math.random() * 100000,
        user: this.currentUser,
        text: this.newMessageText,
      });
      this.newMessageText = '';
    }
  }
}
