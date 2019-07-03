import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-notification',
  templateUrl: './purchase-notification.component.html',
  styleUrls: ['./purchase-notification.component.css']
})
export class PurchaseNotificationComponent implements OnInit {
  @Input() isBuyBtnPressed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
