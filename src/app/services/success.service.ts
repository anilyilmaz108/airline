import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root',
})
export class SuccessService {
  constructor(private swal: SwalService) {}

  successHandler(success: number) {
    switch (success) {
      case 200:
        this.swal.callToast('İşleminiz başarıyla gerçekleşti', 'success');
        break;
      case 201:
        this.swal.callToast('Hesabınız başarıyla oluşturuldu', 'success');
        break;
      case 202:
        this.swal.callToast('Hesabınıza giriş yapıldı', 'success');
        break;
      case 203:
        this.swal.callToast(
          'Profil fotoğrafınız başarıyla güncellendi',
          'success'
        );
        break;
      case 204:
        this.swal.callToast('Kullanıcı silindi', 'success');
        break;
      case 205:
        this.swal.callToast('Kullanıcı eklendi', 'success');
        break;
      case 206:
        this.swal.callToast('Kullanıcı güncellendi', 'success');
        break;
      case 207:
        this.swal.callToast('Seçili kullanıcılar silindi', 'success');
        break;
    }
  }
}
