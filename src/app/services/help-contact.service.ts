import { Injectable, inject } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { HelpContact } from '../models/help-contact';
import { orderBy } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class HelpContactService {

  private fsService = inject(FirestoreService);
  now = new Date();

  getAll() {
    return this.fsService.listen<HelpContact>('Contact',
    orderBy('operationDate')
    );
  }

  async get(id: string) {
    return (await this.fsService.get(`Contact/${id}`));
  }
  async add(data: HelpContact) {
    return await this.fsService.add('Contact', data); 
  }
}
