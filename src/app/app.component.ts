import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `small-eye`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `assets/svg/small-eye.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      `small-eye-off`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `assets/svg/small-eye-off.svg`
      )
    );
  }
  title = 'Angular-Security';
}
