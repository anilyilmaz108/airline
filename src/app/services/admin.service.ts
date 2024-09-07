import { Injectable, inject } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { orderBy } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private fsService = inject(FirestoreService);

  getStats() {
    return this.fsService.list<any>('DailyStats',
    //where('endDate', '>=', this.now),
    orderBy('date')
    );
  }
}
