import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';


const modules = [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatDividerModule,
    DragDropModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})

export class MaterialModule {

};