import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';
import { orderBy, where } from 'firebase/firestore';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private fsService = inject(FirestoreService);
  now = new Date();

  getAll() {
    return this.fsService.listen<User>('User',
    //where('endDate', '>=', this.now),
    orderBy('created_at')
    );
  }

  async get(id: string) {
    return (await this.fsService.get(`User/${id}`));
  }

  async add(data: User) {
    return await this.fsService.add('User', data); 
  }

  async addDataWithCustomDocId(data: User, customId: string) {
    return await this.fsService.addDataWithCustomRef('User', data, customId); 
  }

  async set(path: string, data: User) {
    return await this.fsService.set(path, data);
  }

  update(id: string, data: User) {
    return this.fsService.update(`User/${id}`, data);
  }

  delete(id: string) {
    return this.fsService.delete(`User/${id}`); 
  }
}
