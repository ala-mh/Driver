import {NgModule} from "@angular/core";
import {sharedLibraryModule} from "./sharedLibrary.module";
import {CommonModule, LowerCasePipe, NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {FooterComponent} from "./footer/footer.component";
import {ToastComponent} from "./toast/toast.component";


@NgModule({
  declarations: [
    FooterComponent,
    ToastComponent
  ],
  imports: [
    sharedLibraryModule,
    NgForOf,
    NgClass,
    NgIf,
    LowerCasePipe,
    NgSwitchCase,
    NgSwitch],
  exports: [
    sharedLibraryModule,
    FooterComponent,
    ToastComponent,
    NgForOf,
    NgClass,
    NgIf,
    LowerCasePipe,
    NgSwitchCase,
    NgSwitch,
    CommonModule
  ],
  providers: [ToastComponent],
  bootstrap: []
})
export class SharedModule {
}
