import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-inflight-services',
  standalone: true,
  imports: [NzDividerModule, CommonModule, NzTypographyModule, NzImageModule],
  templateUrl: './inflight-services.component.html',
  styleUrl: './inflight-services.component.less'
})
export class InflightServicesComponent {
  data = [
    "Lezzetli yemekler ve geniş içecek seçeneklerimizle uçuş sırasında damak tadınıza hitap ederiz. Menü seçeneklerimizi, özel diyet taleplerinizi karşılayacak şekilde düzenleyebiliriz.",
    "Geniş bir eğlence yelpazesi sunarak film, dizi ve müzik seçenekleriyle yolculuğunuzu keyifli hale getiririz. Kişisel ekranlarınızda dilediğiniz içerikleri izleyebilir veya dinleyebilirsiniz.",
    "Rahat ve ergonomik koltuklarımız, uzun uçuşlarınızı daha konforlu hale getirir. Ekstra bacak alanı ve ayarlanabilir sırt yaslama özellikleriyle dinlenme imkanı sunarız.",
    "Uçuş sırasında bağlantınızı kesmeden işlerinizi halletmenizi sağlayan Wi-Fi hizmetimiz ve elektronik cihazlarınızı şarj edebileceğiniz prizlerimiz mevcuttur.",
    "Profesyonel kabin ekibimiz, her türlü ihtiyacınızda yanınızda olup, size üstün bir hizmet deneyimi sunmak için hazırdır. Sorularınız ve özel talepleriniz için ekibimize başvurabilirsiniz.",
    "Uçak içi hijyen standartlarımıza yüksek öncelik veriyoruz. Temizlik ve dezenfeksiyon süreçlerimizle güvenli ve temiz bir ortam sunarız.",
  ];
}
