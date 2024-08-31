import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  storage: Storage = inject(Storage);
  constructor() {}

  async uploadToStorage(
    path: string,
    input: any,
    contentType: any
  ) {
    if (!input.files) return null;
    const files: FileList = input.files;
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const imagePath = `${path}/${file.name}`;
        const storageRef = ref(this.storage, imagePath);
        await uploadBytesResumable(storageRef, file, contentType);
        return await getDownloadURL(storageRef);
      }
    }
    return null;
  }
}
