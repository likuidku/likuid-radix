import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'lkd-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
})
export class ScrollerComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, { static: false }) scroller: CdkVirtualScrollViewport;

  @Input() items: any[];
  @Input() config: { main: string, columns: string[], icons: string[]};
  @Input() total: number;

  @Output() itemSelected: EventEmitter<number> = new EventEmitter<number>();

  public main: string;
  public columns: string[];
  public icons: string[];


  constructor(
  ) { }

  ngOnInit(): void {
    this.buildHeader();
  }

  buildHeader() {
    this.main     = `Total ${this.config.main}: `;
    this.columns  = this.config.columns;
    this.icons    = this.config.icons;
  }

  editItem(i: number) {
    this.itemSelected.emit(i);
  }

  goToTop() {
    this.scroller.scrollToIndex(0, 'smooth');
  }

  goToMiddle() {
    this.scroller.scrollToIndex(this.scroller.getDataLength() / 2, 'smooth');
  }

  goToBottom() {
    this.scroller.scrollToIndex(this.scroller.getDataLength(), 'smooth');
  }
}
