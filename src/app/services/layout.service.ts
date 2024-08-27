import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private layoutSubject = new BehaviorSubject<PageLayout>(PageLayout.Public)

    public layout$ = this.layoutSubject.asObservable()

    setLayout(value: PageLayout) {
        this.layoutSubject.next(value)
    }
}

export enum PageLayout {
  Public = 'public',
  Private = 'private',
  Blank = 'blank',
}