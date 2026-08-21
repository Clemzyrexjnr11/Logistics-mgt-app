import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize, Subject, takeUntil } from 'rxjs';
import { ApiResponse } from 'src/app/modules/shared/models/api-response';
import { CoreApiService } from 'src/app/modules/shared/services/core-api.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';

@Component({
  selector: 'app-new-shipment',
  templateUrl: './new-shipment.component.html',
  styleUrls: ['./new-shipment.component.css']
})
export class NewShipmentComponent {
 form!:FormGroup;
  isLoading: boolean = false;
  destroy$ = new Subject<void>();
    packageType = [
    { key: 'Document', value: 'document' },
    { key: 'Parcel', value: 'parcel' },
    { key: 'Fragile', value: 'fragile' },
    { key: 'Bulk', value: 'bulk' },
  ];
  constructor(
    private fb: FormBuilder,
    private coreApiService: CoreApiService,
    private snackbar:SnackbarService,
    public dialogRef: MatDialogRef<NewShipmentComponent>
  ) {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
   this.form = this.fb.group({
    originAddress:['', Validators.required],
    destinationAddress:['', Validators.required],
    recipientName:['', Validators.required],
    recipientPhone:['', Validators.required],
    packageType:['', Validators.required],
    notes:[''],
   })

  }


  onSubmitForm() {
    if (this.form.invalid) {
      return;
    }
    let request = {
      originaddress: this.form.value['originAddress'],
      destinationaddress: this.form.value['destinationAddress'],
      recipientname: this.form.value['recipientName'],
      recipientphone: this.form.value['recipientPhone'],
      packagetype: this.form.value['packageType'],
      notes: this.form.value['notes'] ?? null,
    };
    this.isLoading = true;
    this.coreApiService.createShipment(request)
      .pipe(
        finalize(() => (this.isLoading = false)),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next:(res)=>{
          let response = new ApiResponse(res);
          if(response.success){
             this.snackbar.openSnackBar('Shipment created successfully', 'success-snackbar')
          };

          this.form.reset();
          this.dialogRef.close();
        },
        error:(res)=>{
        let response = new ApiResponse(res);
        let errorMessage = typeof(response.error.message) === 'string' ? response.error.message : response.error;
        this.snackbar.openSnackBar(errorMessage, 'error-snackbar')
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
