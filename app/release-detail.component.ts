import { Component, Input } from '@angular/core';

import { Release } from './release';

@Component({
  selector: 'release-detail',
  template: `
  <div *ngIf="release">
    <h2>{{release.description}} details!</h2>
    <div><label>id: </label>{{release.id}}</div>
    <div>
      <label>description: </label>
      <input [(ngModel)]="release.description" placeholder="description"/>
    </div>
  </div>
  `  
})
export class ReleaseDetailComponent {
    @Input()
    release: Release;
}
