import { Component } from '@angular/core';
import { AuthenticationService } from '../../controllers/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { NewShipmentComponent } from '../shipments/new-shipment/new-shipment.component';
import { CoreApiService } from '../../shared/services/core-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  shipmentAvailable: boolean = false;
  userName!: string;
  destroy$ = new Subject<void>();
  dashboardMetrics: any = {};
  constructor(
    private authService: AuthenticationService,
    private coreapiService: CoreApiService,
    private dialog: MatDialog,
  ) {
    this.userName = this.authService.userName.split(' ')[0];
  }

  ngOnInit() {
    this.getDashboardSummary();
  }

  getDashboardSummary() {
    this.coreapiService.getDashboardMetrics().subscribe({
      next: (res) => {
        this.dashboardMetrics = res['data'];
        this.shipmentAvailable = Object.values(this.dashboardMetrics).some(
          (v: any) => v > 0,
        );

        // console.log(this.shipmentAvailable);
      },
      error: () => console.log('error occured'),
    });
  }

  onCreateNewShipment() {
    this.dialog.open(NewShipmentComponent, {
      width: '500px',
      height: '100%',
      backdropClass: 'custom-backdrop',
      panelClass: ['slide-in-right'],
      position: {
        top: '0px',
        right: '0px',
      },
    });
  }
}
