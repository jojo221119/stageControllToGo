import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ScriptViewComponent } from './script-view/script-view.component';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
const appRoutes: Routes = 
[
  {path: 'scripts/:scriptName', component: ScriptViewComponent},
  {path: '', component: StartPageComponent  }
];
@NgModule({
  declarations: [
    AppComponent,
    ScriptViewComponent,
    StartPageComponent
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