import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {environment} from 'src/environments/environment.etherium';
import {Router} from "@angular/router";
import {DataService} from "../store-service";

@Component({
    selector: 'app-g-step3',
    templateUrl: './g-step3.component.html',
    styleUrls: ['./g-step3.component.scss']
})
export class GStep3Component implements OnInit {
    @Input() profit;
    @Output() select: EventEmitter<any> = new EventEmitter();

    public environment = environment;

    public selected() {
        this.select.emit({});
    }

    constructor(
        private router: Router,
        private data: DataService
    ) { }

    public getMoney() {
        this.data.getParams().subscribe(
            res => {
                const clone = JSON.parse(JSON.stringify(res));
                const trackingNextPart = res.tracking;
                let url = `${environment.redirectUrl}${trackingNextPart}?`;
                delete clone.tracking;
                Object.keys(clone).forEach(item => url += `${item}=${res[item]}&`);
                const newUrl = url.slice(0, -1);
                window.open(newUrl, '_blank');
            }
        );
    }

    ngOnInit() {
    }
}
