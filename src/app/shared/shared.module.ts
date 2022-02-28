import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
// import { ModalService } from '../services/modal.service';



@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  // We need to manually export components from a module
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ],
})
export class SharedModule { }
