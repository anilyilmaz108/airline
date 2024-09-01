import { Injectable, inject } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { FlightModel } from '../models/flight';
import { orderBy, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private fsService = inject(FirestoreService);
  now = new Date();

  getAll() {
    return this.fsService.listen<FlightModel>('Flight',
    //where('endDate', '>=', this.now),
    orderBy('operationDate')
    );
  }

  getFlight(id: string) {
    return this.fsService.listen<FlightModel>('Flight',
    where('id', '>=', id),
    );
  }

  async get(id: string) {
    return (await this.fsService.get(`Flight/${id}`));
  }

  async add(data: FlightModel) {
    return await this.fsService.add('Flight', data); 
  }

  async addDataWithCustomDocId(data: any, customId: string) {
    return await this.fsService.addDataWithCustomRef('Flight', data, customId); 
  }

  async set(path: string, data: FlightModel) {
    return await this.fsService.set(path, data);
  }

  async update(id: string, data: any) {
    return await this.fsService.update(`Flight/${id}`, data);
  }

  async getDocumentData(id: string){
    return await this.fsService.listenToDocument(`Flight/${id}`);
  }

  delete(id: string) {
    return this.fsService.delete(`Flight/${id}`); 
  }
}
