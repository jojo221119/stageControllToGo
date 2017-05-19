import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ScriptViewComponent } from './components/script-view/script-view.component';
import { StartPageComponent } from './components/start-page/start-page.component';

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

const appRoutes: Routes = [
  {
    path: 'scripts/:scriptName',
    component: ScriptViewComponent
  },
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'plays',
    component: SelectPlayComponent
  },
  {
    path: 'play/new',
    component: NewPlayComponent
  },
  {
    path: 'play/edit/:title',
    component: EditPlayComponent
  },
  {
    path: 'play/edit/:title/transmissions/update/:transmission',
    component: UpdateTransmissionComponent
  },
  {
    path: 'play/edit/:title/transmissions/edit/:transmission',
    component: EditTransmissionComponent
  },
  {
    path: 'play/edit/:title/transmissions/new',
    component: NewTransmissionComponent
  },
  {
    path: 'play/edit/:title/transmissions/edit/:transmission/devices/new',
    component: NewDeviceComponent
  },
  {
    path: 'play/edit/:title/transmissions/edit/:transmission/devices/update/:device',
    component: UpdateDeviceComponent
  },
  {
    path: 'play/edit/:title/transmissions/edit/:transmission/devices/:device/new',
    component: EditDeviceComponent
  },
  {
    path: 'play/edit/:title/transmissions/edit/:transmission/devices/:device/update/:channel/number/:channelNumber',
    component: UpdateChannelComponent
  },
  {
    path: 'play/edit/:title/transmissions/edit/:transmission/devices/:device',
    component: ListChannelsComponent
  },
  {
    path: 'play/edit/:title/scenes/new',
    component: NewSceneComponent
  },
  {
    path: 'play/edit/:title/scenes/:scene/update',
    component: UpdateSceneComponent
  },
  {
    path: 'play/edit/:title/scenes/:scene/effects',
    component: ListEffectsComponent
  },
  {
    path: 'play/edit/:title/scenes/:scene/effects/new',
    component: NewEffectComponent
  },
  {
    path: 'play/edit/:title/scenes/:scene/effects/update/:effect',
    component: UpdateEffectComponent
  },
  {
    path: 'play/edit/:title/states/new',
    component: NewStateComponent
  },
  {
    path: 'play/edit/:title/states/update/:state',
    component: UpdateStateComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
