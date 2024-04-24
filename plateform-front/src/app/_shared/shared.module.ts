import {NgModule} from "@angular/core";
import {sharedLibraryModule} from "./sharedLibrary.module";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CommonModule, LowerCasePipe, NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {FooterComponent} from "./footer/footer.component";
import {ToastComponent} from "./toast/toast.component";


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
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
    NavbarComponent,
    SidebarComponent,
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
