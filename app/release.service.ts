import { Injectable } from '@angular/core';

import { Release } from './release';
import { RELEASES } from './mock-releases';

@Injectable()
export class ReleaseService {
    getReleases(): Promise<Release[]> {
        return Promise.resolve(RELEASES);
    }

    getRelease(id: number): Promise<Release> {
        return this.getReleases()
                    .then(releases => releases.find(release => release.id === id));
        }
}
