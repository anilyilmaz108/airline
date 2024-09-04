import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-baggage-allowance',
  standalone: true,
  imports: [NzInputModule, NzButtonModule, NzDescriptionsModule, NzTypographyModule, NzDividerModule, CommonModule],
  templateUrl: './baggage-allowance.component.html',
  styleUrl: './baggage-allowance.component.less',
  host: { ngSkipHydration: 'true' },
})
export class BaggageAllowanceComponent {
  findFlight() {
    console.log('Uçuş aranıyor..');
  }

  data = [
    "Her yolcu, uçuş sırasında yanına ücretsiz olarak bir adet el bagajı alabilir. Maksimum ölçüler ve ağırlık sınırlamaları, uçuş sınıfınıza göre değişiklik gösterebilir. Genel olarak, el bagajınızın maksimum ağırlığı 8 kg ve ölçüleri 55 x 40 x 20 cm olmalıdır.",
    "El bagajınıza ek olarak, bir adet kişisel eşya (örneğin, el çantası, dizüstü bilgisayar çantası veya kamera çantası) taşıyabilirsiniz. Bu kişisel eşyaların da belirli boyut ve ağırlık sınırlarına uyması gerekmektedir.",
    "Uçuşunuza bağlı olarak, ücretsiz bagaj hakkınız mevcuttur. Ekonomi sınıfında genellikle 20 kg, Business sınıfında ise 30 kg bagaj hakkı sunulmaktadır. Bagaj hakkı detayları bilet sınıfınıza ve destinasyonunuza göre değişebilir",
    "Ücretsiz bagaj hakkınızı aşmanız durumunda, fazla bagaj ücreti uygulanabilir. Ekstra bagaj hakkınızı önceden rezervasyon yaparak veya havaalanında check-in sırasında satın alabilirsiniz.",
    "Spor ekipmanları, müzik aletleri veya diğer özel eşyalar için ek bagaj hakkı gerekebilir. Bu tür eşyalarınız için önceden bilgi vererek, uygun taşıma ve ücretlendirme hakkında bilgi alabilirsiniz.",
    "Bagajınızın güvenliği ve takibi için modern sistemler kullanıyoruz. Her bagajınızın üzerinde etiket bulunmaktadır ve bu etiket, bagajınızı uçuş sırasında takip etmenize olanak tanır.",
    "Bagajınızın kaybolması veya hasar görmesi durumunda, hemen havaalanı yetkilileri ile iletişime geçmelisiniz. Bagaj sorunlarıyla ilgili destek almak için müşteri hizmetlerimizden yardım alabilirsiniz."
  ];
}
