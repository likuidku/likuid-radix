import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() title?: string;
  @Input() search = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
