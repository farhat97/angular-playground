import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {
    private message = new BehaviorSubject('default message');
    currentMessage = this.message.asObservable();

    constructor() { }

    changeMessage(newMessage: string) {
        this.message.next(newMessage);
    }
}