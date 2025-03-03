import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './timelinedemo.component.html',
    styleUrls: ['./timelinedemo.scss'],
    selector: 'app-timelinedemocomponent',
})
export class TimelineDemoComponent implements OnInit {
    events1: any[] = [];

    ngOnInit() {
        this.events1 = [
            {
                status: 'Solidité et durabilité',
                icon: '1',
                color: '#ffd54f',
            },
            {
                status: 'Respect des normes et standards les plus élevés de l’industrie',
                icon: '2',
                color: '#ffd54f',
            },
            {
                status: 'Service professionnel et impeccable ',
                icon: '3',
                color: '#ffd54f',
            },
            {
                status: 'Garanties offertes',
                icon: '4',
                color: '#ffd54f',
            },
        ];
    }
}
