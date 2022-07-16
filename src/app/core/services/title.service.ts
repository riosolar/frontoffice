import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    constructor(
        private readonly title: Title,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    public watchRouteChangeAndSetTitle(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data['title']) {
                        return child.snapshot.data['title'];
                    } else {
                        return null;
                    }
                }
                return null;
            })
        ).subscribe((title: string) => {
            if (title) {
                this.title.setTitle(`${title} - Hefner`);
            } else {
                this.title.setTitle('Hefner');
            }
        });
    }
}