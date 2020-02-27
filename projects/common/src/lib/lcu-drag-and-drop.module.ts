import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { DragAndDropService } from './services/drag-and-drop.service';
import { DragAndDropComponent } from './controls/drag-and-drop/drag-and-drop.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
  declarations: [DragAndDropComponent, DragAndDropDirective],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [DragAndDropComponent, DragAndDropDirective],
  entryComponents: []
})
export class LcuDragAndDropModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuDragAndDropModule,
      providers: [DragAndDropService]
    };
  }
}
