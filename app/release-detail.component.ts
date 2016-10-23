// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ReleaseService } from './release.service';
import { Release } from './release';

@Component({
  moduleId: module.id,
  selector: 'release-detail',
  templateUrl: 'release-detail.component.html',
})

export class ReleaseDetailComponent implements OnInit {
    @Input()
    release: Release;

    constructor(
      private releaseService: ReleaseService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.releaseService.getRelease(id)
          .then(release => this.release = release);
      });
    }

    goBack(): void {
      this.location.back();
    }

}
