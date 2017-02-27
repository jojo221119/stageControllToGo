import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScriptComponent } from './script/script.component';
import { ScriptViewComponent } from './script-view/script-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ScriptComponent,
    ScriptViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
