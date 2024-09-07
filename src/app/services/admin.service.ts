import { Injectable, inject } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { limit, orderBy } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private fsService = inject(FirestoreService);

  getStats() {
    return this.fsService.list<any>('DailyStats',
    orderBy('date')
    );
  }

  getTwoComments() {
    return this.fsService.list<any>('Contact',
    orderBy('operationDate', 'desc'),
    limit(2)
    );
  }

  getAllComments() {
    return this.fsService.list<any>('Contact',
    orderBy('operationDate', 'desc'),
    );
  }
}
