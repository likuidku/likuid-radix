import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-polybtn',
  templateUrl: './polybtn.component.html',
  styleUrls: ['./polybtn.component.scss']
})
export class PolybtnComponent implements OnInit {

  @Input() isActive     = false;
  @Input() content      = true;
  @Input() color        = true;

  constructor() { }

  ngOnInit(): void {
  }

}
