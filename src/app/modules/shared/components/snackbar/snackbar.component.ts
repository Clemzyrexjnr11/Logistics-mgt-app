import { Component, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent {
    constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: string
  ) {
    this.iconRegistry
      .addSvgIcon(
        'snackbar-icon',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/snackbar-icon.svg')
      )
  }
}
