import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
