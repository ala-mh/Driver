import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChipsModule} from "primeng/chips";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from 'primeng/styleclass';
import {PasswordModule} from 'primeng/password';
import {MenubarModule} from 'primeng/menubar';
import {TagModule} from "primeng/tag";
import {FieldsetModule} from "primeng/fieldset";
import {TableModule} from 'primeng/table';
import {DropdownModule} from "primeng/dropdown";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogService, DynamicDialogModule, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";
import {StepsModule} from "primeng/steps";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from "primeng/messages";
import {InputSwitchModule} from "primeng/inputswitch";
import {OrganizationChartModule} from "primeng/organizationchart";
import {PaginatorModule} from "primeng/paginator";
import {ToggleButtonModule} from "primeng/togglebutton";
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {TreeTableModule} from "primeng/treetable";
import {RatingModule} from "primeng/rating";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ColorPickerModule} from "primeng/colorpicker";
import {DialogModule} from "primeng/dialog";
import {BadgeModule} from "primeng/badge";
import {ImageCropperModule} from "ngx-image-cropper";
import {NgxEditorModule} from "ngx-editor";
import {GalleriaModule} from "primeng/galleria";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatGridListModule} from '@angular/material/grid-list';
import {ProgressBarModule} from "primeng/progressbar";
import {DataViewModule} from "primeng/dataview";
import {TabViewModule} from "primeng/tabview";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ChipModule} from "primeng/chip";
import {CalendarModule} from "primeng/calendar";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {AutoCompleteModule} from "primeng/autocomplete";

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    FormsModule,
    HttpClientModule,
    ChipsModule,
    CheckboxModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    PasswordModule,
    MenubarModule,
    TagModule,
    FieldsetModule,
    TableModule,
    DropdownModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ToastModule,
    CardModule,
    StepsModule,
    InputTextModule,
    MessagesModule,
    InputSwitchModule,
    DynamicDialogModule,
    OrganizationChartModule,
    PaginatorModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    TreeTableModule,
    RatingModule,
    ProgressSpinnerModule,
    ColorPickerModule,
    DialogModule,
    BadgeModule,
    ImageCropperModule,
    NgxEditorModule,
    GalleriaModule,
    DragDropModule,
    MatGridListModule,
    ProgressBarModule,
    DataViewModule,
    TabViewModule,
    OverlayPanelModule,
    ChipModule,
    CalendarModule,
    LeafletModule,
    AutoCompleteModule
  ],
  providers: [
    DialogService,
    MessageService,
    ConfirmationService,
    DynamicDialogRef
  ],
  bootstrap: []
})
export class sharedLibraryModule {
}
