// --- CORE -------------------------------------
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

// --- INTERFACES -------------------------------
import { Dropdown } from 'src/app/classes/interfaces';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lkd-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnDestroy {

  @Input() config: Dropdown;
  public isDropped = false;
  private routerEventsSubs: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routerEventsSubs = this.router.events.subscribe(
      () => this.checkRoute()
    );
  }

  ngOnDestroy(): void {
    this.routerEventsSubs.unsubscribe();
  }

  toggleDrop(): void {
    this.isDropped = !this.isDropped;
  }

  checkRoute() {
    if (this.router.url.includes(this.config.item.link)) {
      this.isDropped = true;
    } else {
      this.isDropped = false;
    }
  }
}
