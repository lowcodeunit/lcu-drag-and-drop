import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'lcu-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  protected _userCollection: Array<any>;

  @Input('user-collection')
  public set UserCollection(value: any) {
    this._userCollection = value;
  }
  public get UserCollection() {
    return this._userCollection;
  }

  constructor() {

  }

  public ngOnInit(): void { }

  public Drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.UserCollection, event.previousIndex, event.currentIndex);
  }

}
