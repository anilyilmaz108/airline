import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-vip-selection',
  standalone: true,
  imports: [NzDividerModule, CommonModule, NzTypographyModule, NzImageModule],
  templateUrl: './vip-selection.component.html',
  styleUrl: './vip-selection.component.less'
})
export class VipSelectionComponent {

  data = [
    "Havaalanına vardığınızda hızlı ve zahmetsiz bir şekilde işlemlerinizi tamamlamanızı sağlayan öncelikli check-in ve boarding hizmetlerimizle, zamanınızı verimli bir şekilde kullanabilirsiniz.",
    "Sizi rahatlatıcı bir ortamda beklemenizi sağlayan özel lounge erişimi sunuyoruz. Ücretsiz yiyecek ve içeceklerin yanı sıra, konforlu oturma alanları ve internet erişimiyle seyahat öncesi veya sonrası keyifli vakit geçirebilirsiniz.",
    "Seyahatiniz boyunca özel asistanlarımız, tüm ihtiyaçlarınızı karşılamak için sizinle ilgilenir. Bilet düzenlemelerinden bagaj yönetimine kadar her türlü konuda destek sağlarlar.",
    "Havaalanı transferleriniz, şehrin en konforlu araçlarıyla sağlanır. VIP araçlarımızla hızlı, güvenli ve rahat bir yolculuk deneyimi yaşarsınız.",
    "Uçuşunuz sırasında size özel hazırlanan gurme yemekler ve içecek seçenekleri sunarak, en yüksek kaliteyi ve lezzeti deneyimlemenizi sağlarız.",
    "Güvenliğiniz ve gizliliğiniz bizim önceliğimizdir. Özel güvenlik önlemleri ve gizlilik standartlarımızla, seyahatinizi endişesiz bir şekilde geçirebilirsiniz.",
  ];
}
