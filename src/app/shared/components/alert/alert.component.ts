import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

    @Input() message: string = '';
    visible: boolean = true;

    constructor(private cdr: ChangeDetectorRef) { }


    ngOnInit(): void {
        setTimeout(() => {
            this.visible = false;
            this.cdr.detectChanges();
        }, 2000);
    }

}
