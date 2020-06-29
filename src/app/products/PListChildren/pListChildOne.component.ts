import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pListChildOne',
    templateUrl: './pListChildOne.component.html'
})

export class PListChildOne implements OnInit {
    ngOnInit(): void { }

    title = "pListChild 1 title";

    constructor() { }

}