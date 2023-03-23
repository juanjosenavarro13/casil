import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-count',
  templateUrl: './info-count.component.html',
  styleUrls: ['./info-count.component.scss'],
})
export class InfoCountComponent {
  @Input() count: number;
  @Input() title: string;

  constructor() {
    this.count = 0;
    this.title = '';
  }
}
