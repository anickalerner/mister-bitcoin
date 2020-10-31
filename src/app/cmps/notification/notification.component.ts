import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/models/alert';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  alerts: Alert[];
  constructor() { }

  ngOnInit(): void {
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
