import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ElementViewerComponent } from './element-viewer/element-viewer.component';
import { ScriptViewComponent } from './script-view/script-view.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = 
[
  {path: 'script', component: ScriptViewComponent},
  {path: '',
    redirectTo: 'script',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ElementViewerComponent,
    ScriptViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }