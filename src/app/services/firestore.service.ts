import { Injectable, inject } from '@angular/core';
import { Firestore, QueryConstraint, collection, getDocs, onSnapshot } from '@angular/fire/firestore';
import { CollectionReference, addDoc, deleteDoc, doc, getDoc, query, setDoc, updateDoc } from '@firebase/firestore';
import { BehaviorSubject, Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore = inject(Firestore);

  // Örnek Kullanım: this.fsService.list<ModelAdı>('collection', /* sorgular virgülle */);
  list<T>(path: string, ...q: QueryConstraint[]): Observable<T[]> {
    const collectionRef = collection(this.firestore, path) as CollectionReference<T>;
    const qRef = query(collectionRef, ...q);
    return from(getDocs(qRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() } as T)))
    );
  }

  // List ile aynı ama Realtime
  listen<T>(path: string, ...q: QueryConstraint[]): Observable<T[]> {
    const collectionRef = collection(this.firestore, path) as CollectionReference<T>;
    const qRef = query(collectionRef, ...q);
    
    const subject = new BehaviorSubject<T[]>([]);
  
    onSnapshot(qRef, snapshot => {
      const data = snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() } as T));
      subject.next(data);
    });
  
    return subject.asObservable();
  }

  add(path: string, data: any) {
    const ref = collection(this.firestore, path);
    return addDoc(ref, this.setUndefinedValuesToNull(data));
  }

  addDataWithCustomRef(path: string, data: any, customDocId?: string) {
    const collectionRef = collection(this.firestore, path); // Koleksiyon referansı
    let docRef;
  if (customDocId) {
    // Eğer bir custom ID belirtilmişse, o ID ile bir doc referansı oluştur
    docRef = doc(collectionRef, customDocId); 
  } else {
    // Eğer custom ID verilmemişse, Firestore'un rastgele ID ataması için doc referansı oluştur
    docRef = doc(collectionRef); 
  }
  return setDoc(docRef, this.setUndefinedValuesToNull(data)); // Dökümana veri ekle
  }

  set(path: string, data: any) {
    const ref = doc(this.firestore, path);
    return setDoc(ref, this.setUndefinedValuesToNull(data), { merge: true });
  }

  get(path: string) {
    const ref = doc(this.firestore, path);
    return getDoc(ref);
  }

  update(path: string, data: any) {
    const ref = doc(this.firestore, path);
    return updateDoc(ref, this.setUndefinedValuesToNull(data));
  }

  delete(path: string) {
    const ref = doc(this.firestore, path);
    return deleteDoc(ref);
  }

  setUndefinedValuesToNull(data: any) {
    Object.keys(data).filter(k => data[k] == undefined).forEach(k => data[k] = null);
    return data;
  }
}