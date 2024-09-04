import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-flex-reservation',
  standalone: true,
  imports: [NzDividerModule, CommonModule, NzTypographyModule, NzImageModule],
  templateUrl: './flex-reservation.component.html',
  styleUrl: './flex-reservation.component.less'
})
export class FlexReservationComponent {
  data = [
    "Rezervasyonunuzu yaparken tarih veya saat değişiklikleri yapmanız gerekirse, belirli koşullar altında ücretsiz değişiklik yapabilirsiniz. Seyahat tarihlerinizi veya uçuş saatlerinizi değiştirmek için müşteri hizmetlerimizle iletişime geçebilirsiniz.",
    "Planlarınızda değişiklik yapmanız gerektiğinde, esnek iptal seçeneklerimizle biletinizi iptal edebilir ve ödemenizi geri alabilirsiniz. İptal şartlarımız ve koşullarımız hakkında detaylı bilgiye İptal Politikamız sayfasından ulaşabilirsiniz.",
    "Rezervasyonunuzu değiştirmek istediğinizde, hızlı ve kolay bir süreç sunarak sizin için en uygun alternatifleri belirleriz. Online portalımız veya müşteri hizmetlerimiz aracılığıyla değişiklik işlemlerinizi gerçekleştirebilirsiniz.",
    "Esnek rezervasyon politikamız kapsamında karşılaşabileceğiniz her türlü sorun için profesyonel müşteri hizmetlerimiz size yardımcı olur. Sorularınızı yanıtlamak ve ihtiyaçlarınıza uygun çözümler sunmak için buradayız.",
  ];
}
