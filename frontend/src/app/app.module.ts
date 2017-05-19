import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// imports stagecontroll to go
import { AppComponent } from './app.component';
import { ScriptViewComponent } from './components/script-view/script-view.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


// imports dionysos
import { NotFoundComponent } from './components/notFound/notFound.component';
import { SelectPlayComponent } from './components/selectPlay/selectPlay.component';
import { NewPlayComponent } from './components/newPlay/newPlay.component';
import { EditPlayComponent } from './components/editPlay/editPlay.component';
import { EditTransmissionComponent } from './components/editTransmission/editTransmission.component';
import { NewTransmissionComponent } from './components/newTransmission/newTransmission.component';
import { EditDeviceComponent } from './components/editDevice/editDevice.component';
import { NewDeviceComponent } from './components/newDevice/newDevice.component';
import { NewSceneComponent } from './components/newScene/newScene.component';
import { NewEffectComponent } from './components/newEffect/newEffect.component';
import { UpdateTransmissionComponent } from './components/updateTransmission/updateTransmission.component';
import { NewStateComponent } from './components/newState/newState.component';
import { UpdateStateComponent } from './components/updateState/updateState.component';
import { UpdateDeviceComponent } from './components/updateDevice/updateDevice.component';
import { ListChannelsComponent } from './components/listChannels/listChannels.component';
import { UpdateChannelComponent } from './components/updateChannel/updateChannel.component';
import { ListEffectsComponent } from './components/listEffects/listEffects.component';
import { UpdateEffectComponent } from './components/updateEffect/updateEffect.component';
import { UpdateSceneComponent } from './components/updateScene/updateScene.component';


import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ScriptViewComponent,
    StartPageComponent,
    SideMenuComponent,
    NotFoundComponent,
    SelectPlayComponent,
    NewPlayComponent,
    EditPlayComponent,
    EditTransmissionComponent,
    NewTransmissionComponent,
    EditDeviceComponent,
    NewDeviceComponent,
    NewSceneComponent,
    NewEffectComponent,
    UpdateTransmissionComponent,
    NewStateComponent,
    UpdateStateComponent,
    UpdateDeviceComponent,
    ListChannelsComponent,
    UpdateChannelComponent,
    ListEffectsComponent,
    UpdateEffectComponent,
    UpdateSceneComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }