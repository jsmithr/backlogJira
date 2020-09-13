import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DialogOverviewExampleDialog } from '../dialog-drag-drop/dialog-drag-drop.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})

export class BacklogComponent implements OnInit {
  panelOpenState = false;
  importancias = [
    { valor: 1, descripcion: 'Bajo' },
    { valor: 2, descripcion: 'Medio' },
    { valor: 3, descripcion: 'Alto' },
  ];
  sprints = [
    { orden: 0, importancia: 1, titulo: 'Título 1', descripcion: 'descripcion 1' },
    { orden: 1, importancia: 2, titulo: 'Título 2', descripcion: 'descripcion 2' },
    { orden: 2, importancia: 3, titulo: 'Título 3', descripcion: 'descripcion 3' },
    { orden: 3, importancia: 1, titulo: 'Título 4', descripcion: 'descripcion 4' },
    { orden: 4, importancia: 3, titulo: 'Título 5', descripcion: 'descripcion 5' },
    { orden: 5, importancia: 3, titulo: 'Título 6', descripcion: 'descripcion 6' },
  ];
  constructor(public dialog: MatDialog) { }

  drop(event: CdkDragDrop<string[]>) {
    this.sprints[event.previousIndex].orden = event.currentIndex;
    moveItemInArray(this.sprints, event.previousIndex, event.currentIndex);
  }

  addElement(){
    this.sprints.push({ orden: this.sprints.length, importancia: 1, titulo: '', descripcion: '' });
  }

  ngOnInit(): void {
  }

}
