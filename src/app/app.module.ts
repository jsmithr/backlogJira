import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentationAngularComponent } from './components/documentation-angular/documentation-angular.component';
import { MaterialModule } from './material.module';
import { BacklogComponent } from './components/backlog/backlog.component';
import { DialogDragDropComponent, DialogOverviewExampleDialog } from './components/dialog-drag-drop/dialog-drag-drop.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'documentation', component: DocumentationAngularComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DocumentationAngularComponent,
    BacklogComponent,
    LoginComponent,
    DialogDragDropComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
