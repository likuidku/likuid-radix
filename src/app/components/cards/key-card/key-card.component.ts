import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-key-card',
  templateUrl: './key-card.component.html',
  styleUrls: ['./key-card.component.scss']
})
export class KeyCardComponent implements OnInit {

  @Input() config: { icon: string, color: string, value: any, key: string };

  constructor() { }

  ngOnInit(): void {
  }

}
