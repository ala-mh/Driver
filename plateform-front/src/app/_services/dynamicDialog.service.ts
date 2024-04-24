import {Injectable} from '@angular/core';
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {ToastComponent} from "../_shared/toast/toast.component";

@Injectable({
  providedIn: 'root',
})
export class DynamicDialogService {

  constructor(
    private toast: ToastComponent,
  ) {
  }

  close(ref: DynamicDialogRef, item?: any) {
    ref.onClose.subscribe((result: any) => {
      if (result) {
        if (item) {
          this.toast.showToast('Item updated successfully!', 'Item information changed successfully.', 'success');
        } else {
          this.toast.showToast('Item added successfully!', 'Item information changed successfully.', 'success');
        }
      } else {
        //this.toast.showToast('Item added unsuccessfully!', 'Item information changed unsuccessfully.', 'error');
      }
    });

    ref.onMaximize.subscribe((value) => {
    });
  }
}
