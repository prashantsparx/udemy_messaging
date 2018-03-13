export class Message {
	content: string;
	username: string;
	messageId?: string;
	userId?: string;

	constructor(content: string, username: string, messageId?: string, userId?: string){
		this.username = username;
		this.content = content;
		this.messageId = messageId;
		this.userId = userId;
	}
}