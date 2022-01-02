import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BasicHighlightDirective } from 'src/app/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from 'src/app/better-highligh.ts/better-highlight.directive';

import { AppComponent } from './app.component';
import { UnlessDirective } from './unless/unless.directive';
import { SwitchDirective } from './switch/switch.directive';
import { SwitchCaseDirective } from './switch/switch-case/switch-case.directive';
import { SwitchDefaultDirective } from './switch/switch-default/switch-default.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    SwitchDirective,
    SwitchCaseDirective,
    SwitchDefaultDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
