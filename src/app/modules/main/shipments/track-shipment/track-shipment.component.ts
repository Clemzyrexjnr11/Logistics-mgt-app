import { Component } from '@angular/core';
import { CoreApiService } from 'src/app/modules/shared/services/core-api.service';

@Component({
  selector: 'app-track-shipment',
  templateUrl: './track-shipment.component.html',
  styleUrls: ['./track-shipment.component.css'],
})
export class TrackShipmentComponent {
  ShipmentId: string = '';
  isLoading: boolean = false;
  constructor(private coreApiService: CoreApiService) {}

  onSubmit() {
    if (!this.ShipmentId) {
      return;
    }
    this.isLoading = true;
    let request = { trackingId: this.ShipmentId };
    this.coreApiService.trackShipment(request).subscribe({
      next: (res) => {
        this.isLoading = false;
        console.log(res);
      },
    });
    // console.log(this.ShipmentId);
  }
}
