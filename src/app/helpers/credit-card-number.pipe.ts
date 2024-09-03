import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardNumber',
  standalone: true
})
export class CreditCardNumberPipe implements PipeTransform {
  transform(value: string): string {
    // Sadece sayılar ile formatlama
    if (!value) {
      return '';
    }
    
    // Kart numarasını sadece rakamlarla sınırlayarak formatla
    const formattedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

    return formattedValue.trim(); // Sonundaki boşluğu temizle
  }
}
