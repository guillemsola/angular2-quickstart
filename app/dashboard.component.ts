import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Release } from './release';
import { ReleaseService} from './release.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  releases: Release[] = [];

  constructor(
      private router: Router,
      private releaseService: ReleaseService) { }   

  ngOnInit(): void {
    this.releaseService.getReleases()
      .then(releases => this.releases = releases.slice(1, 5)); // TODO instead of slice add a filter on next releases
  }

  gotoDetail(release: Release): void { 
    let link = ['/detail', release.id];
    this.router.navigate(link);  
  }
}

