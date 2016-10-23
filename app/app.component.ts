import { Component, OnInit } from '@angular/core';

import { Release } from './release';
import { ReleaseService } from './release.service';

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
    </li>
  </ul>
  <release-detail [release]="selectedRelease"></release-detail>
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
  `],
  providers: [ReleaseService]
})

export class AppComponent implements OnInit {
  title = 'Release Manager Editor';
  releases: Release[];
  selectedRelease: Release;

  constructor(private releaseService: ReleaseService) { }

  getReleases(): void {
    this.releaseService.getReleases().then(releases => this.releases = releases)
  }

  ngOnInit(): void {
    this.getReleases();
  }

  onSelect(release: Release): void {
    this.selectedRelease = release;
  }
}
