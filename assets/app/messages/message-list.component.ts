import { Component } from '@angular/core';
import { Message } from './message.model';

@Component({
	selector: 'app-message-list',
	template: `
		<div class="col-md-8 col-md-offset-2">
			<app-message [messages]="messages"></app-message>
		</div>
	`
})

export class MessageListComponent {
	messages: Message[] = [
    	new Message('A Message', 'Prashant'),
    	new Message('A New Message', 'Prashant'),
    	new Message('3rd Message', 'Prashant'),
    ];
}