import { Component } from '@angular/core';

export class Release {
  id: number;
  description: string;
}

const RELEASES: Release[] = [
  { id: 11, description: 'SPN-1.2' },
  { id: 12, description: 'DXC-2.3' },
  { id: 13, description: 'SPN-1.3' },
  { id: 14, description: 'BO-5.4' },
  { id: 15, description: 'DXC-2.3' },
  { id: 16, description: 'SPM-1.3.1' },
  { id: 17, description: 'BPN-4.5' },
  { id: 18, description: 'PL-7.1' },
  { id: 19, description: 'PL-7.1.1' },
  { id: 20, description: 'DXC-3.0' }
];

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <h2>Releases List</h2>
  <ul class="releases">
    <li *ngFor="let release of releases" 
      [class.selected]="Release === selectedRelease"
      (click)="onSelect(release)">
      <span class="release">{{release.id}}</span> {{release.description}}
      <!--<div><label>id: </label>{{release.id}}</div>
      <div>
        <label>description: </label>
        <input [(ngModel)]="release.description" placeholder="description">
      </div>-->
   </li>
</ul>
   <div *ngIf="selectedRelease">
    <h2>{{selectedRelease.description}} details!</h2>
    <div><label>id: </label>{{selectedRelease.id}}</div>
    <div>
      <label>description: </label>
      <input [(ngModel)]="selectedRelease.description" placeholder="description"/>
    </div>
  </div>

  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .releases {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .releases li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .releases li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .releases li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .releases .text {
    position: relative;
    top: -3px;
  }
  .releases .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent {
  title = 'Release Manager Editor';
  releases = RELEASES;
  selectedRelease: Release;

  onSelect(release: Release): void {
    this.selectedRelease = release;
  }
}
