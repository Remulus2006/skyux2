// #region imports
import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyResourcesModule
} from '../resources';

import {
  SkyWindowRefService
} from '../window';

import {
  SkyToastAdapterService
} from './toast-adapter.service';

import {
  SkyToastBodyComponent
} from './toast-body.component';

import {
  SkyToastComponent
} from './toast.component';

import {
  SkyToasterComponent
} from './toaster.component';

import {
  SkyToastService
} from './toast.service';
import { SkyIconModule } from '../icon';
// #endregion

@NgModule({
  declarations: [
    SkyToastBodyComponent,
    SkyToastComponent,
    SkyToasterComponent
  ],
  imports: [
    CommonModule,
    SkyResourcesModule,
    SkyIconModule
  ],
  exports: [
    SkyToastComponent
  ],
  providers: [
    SkyToastService,
    SkyToastAdapterService,
    SkyWindowRefService
  ],
  entryComponents: [
    SkyToastBodyComponent,
    SkyToastComponent,
    SkyToasterComponent
  ]
})
export class SkyToastModule { }
