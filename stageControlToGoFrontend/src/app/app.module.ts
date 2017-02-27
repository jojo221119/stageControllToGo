import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElementViewerComponent } from './element-viewer/element-viewer.component';
import { ScriptViewComponent } from './script-view/script-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementViewerComponent,
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
