import {Component} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  constructor(private messageService: MessageService) {
  }

  showToast(message: string, detail: string, severity: string) {
    this.messageService.add({
      key: 'app-toast',
      summary: message,
      detail: detail,
      severity: severity,
      life: 3000
    });
  }

}
