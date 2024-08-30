import { Injectable, inject } from '@angular/core';
import { UserModel } from '../models/user';
import { orderBy, where } from 'firebase/firestore';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private fsService = inject(FirestoreService);
  now = new Date();

  getAll() {
    return this.fsService.listen<UserModel>('User',
    //where('endDate', '>=', this.now),
    orderBy('created_at')
    );
  }

  async get(id: string) {
    return (await this.fsService.get(`User/${id}`));
  }

  async add(data: UserModel) {
    return await this.fsService.add('User', data); 
  }

  async addDataWithCustomDocId(data: any, customId: string) {
    return await this.fsService.addDataWithCustomRef('User', data, customId); 
  }

  async set(path: string, data: UserModel) {
    return await this.fsService.set(path, data);
  }

  update(id: string, data: UserModel) {
    return this.fsService.update(`User/${id}`, data);
  }

  delete(id: string) {
    return this.fsService.delete(`User/${id}`); 
  }
}
