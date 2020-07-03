// --- CORE MODULES -----------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

// --- COMPONENTS -------------------------------
import { ButtonComponent, PillComponent } from './buttons/buttons.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeadingComponent } from './heading/heading.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { PolybtnComponent } from './polybtn/polybtn.component';
import { FormsModule } from '../forms/forms.module';
import { KeyCardComponent } from './cards/key-card/key-card.component';
import { GraphCardComponent } from './cards/graph-card/graph-card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PillComponent,
    DropdownComponent,
    SpinnerComponent,
    HeadingComponent,
    ScrollerComponent,
    PolybtnComponent,
    KeyCardComponent,
    GraphCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ScrollingModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    PillComponent,
    DropdownComponent,
    SpinnerComponent,
    HeadingComponent,
    ScrollerComponent,
    PolybtnComponent,
    KeyCardComponent,
    GraphCardComponent
  ]
})
export class ComponentsModule { }
