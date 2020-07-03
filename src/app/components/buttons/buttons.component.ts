import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

// --- THEME PRIMARY BUTTON ---------------------

@Component({
  selector: 'lkd-btn',
  template: '<ng-content></ng-content>'
})
export class ButtonComponent implements OnInit {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'lkd-btn');
  }
}

// --- THEME PRIMARY PILL -----------------------

@Component({
  selector: 'lkd-pill',
  template: '<ng-content></ng-content>'
})
export class PillComponent implements OnInit {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'lkd-pill');
  }
}
