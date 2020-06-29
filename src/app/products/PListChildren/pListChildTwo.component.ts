import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../shared/message.service';

@Component({
    selector: 'app-pListChildTwo',
    templateUrl: './pListChildTwo.component.html'
})

export class PListChildTwo implements OnInit {

    title = "pListChild 2 title";

    constructor(private messageService: MessageService) { }

    ngOnInit(): void { 
        this.messageService.currentMessage.subscribe(m => this.title = m);
    }

    // set change title in sibling component (pListChildOne)
    changeSiblingTitle() {
        this.messageService
                .changeMessage("This is the new title, assigned by sibling component (pListChildTwo)");
    }
}