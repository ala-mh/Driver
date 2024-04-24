import {NgModule} from "@angular/core";

import {BoardComponent} from "./board.component";
import {SharedModule} from "../_shared/shared.module";


import {CalendarModule} from "primeng/calendar";

@NgModule({
  declarations: [
    BoardComponent,
  ],
  imports: [
    SharedModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: []
})
export class BoardModule {
}
