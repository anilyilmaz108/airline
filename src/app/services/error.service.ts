import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private swal: SwalService) {}

  errorHandler(err: number) {
    switch (err) {
      case 0:
        this.swal.callToast('İşleminiz sırasında bir hata oluştu', 'error');
        break;
      case 1:
        this.swal.callToast(
          'Hesap oluşturma sırasında bir hata oluştu',
          'error'
        );
        break;
      case 2:
        this.swal.callToast('Giriş işlemi sırasında bir hata oluştu', 'error');
        break;
      case 3:
        this.swal.callToast(
          'Profil fotoğrafı güncelleme sırasında bir hata oluştu',
          'error'
        );
        break;
      case 4:
        this.swal.callToast('İstenilen bir uçuş bulunamadı', 'error');
        break;
      case 5:
        this.swal.callToast('Bilgiler eksik veya yanlış', 'error');
        break;
      case 6:
        this.swal.callToast('İşlem esnasında bir hata oluştu', 'error');
        break;
      case 404:
        this.swal.callToast('API adresi bulunamadı', 'error');
        break;
    }
  }
}
