import { Injectable, Injector } from '@angular/core';
import { StateManagerContext } from '@lcu/common';
import { DragAndDropModel } from '../models/drag-and-drop.model';

@Injectable({
    providedIn: 'root'
})
export class DragAndDropManagerContext extends StateManagerContext<DragAndDropModel> {

    protected State: DragAndDropModel;

    constructor(protected injector: Injector) {
        super(injector);
    }

    public GetDragAndDropById(id: number): void {
        this.State.Loading = true;

        this.Execute({
            Arguments: {
                DragAndDropId: id
            },
            Type: 'get-drag-and-drop-by-id'
        });
    }
    
    protected async loadStateKey() {
        return 'main';
    }

    protected async loadStateName() {
        return 'drag-and-drop';
    }
}
