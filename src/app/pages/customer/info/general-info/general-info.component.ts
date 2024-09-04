import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [NzTypographyComponent, NzCollapseModule],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.less'
})
export class GeneralInfoComponent {
  panels = [
    {
      active: true,
      name: 'Rezervasyon',
      disabled: false,
      desc: 'Uçuş rezervasyonlarınızı web sitemiz üzerinden veya müşteri hizmetlerimiz aracılığıyla yapabilirsiniz. Rezervasyonlarınızın doğruluğunu kontrol etmek sizin sorumluluğunuzdadır.'
    },
    {
      active: false,
      disabled: false,
      name: 'Biletler',
      desc: 'Biletlerinizi rezervasyon sırasında belirtilen kurallara uygun olarak satın almalı ve ödeme işlemlerini tamamlamalısınız. Biletlerdeki bilgilerin doğruluğunu kontrol edin ve gerekli durumlarda değişiklik yapın.'
    },
    {
      active: false,
      disabled: false,
      name: 'Check-in',
      desc: 'Uçuşunuzdan en az 2 saat önce havaalanında bulunarak check-in işlemlerinizi tamamlamalısınız. Online check-in hizmetimizden de faydalanabilirsiniz.'
    },
    {
      active: false,
      name: 'Bagaj',
      disabled: false,
      desc: 'Standart bagaj hakkınızın dışında ek bagaj ücreti uygulanabilir. Bagajınızı havaalanına getirmeden önce kurallara uygun olarak hazırlamanız gerekmektedir. Kayıp veya hasarlı bagaj durumunda derhal bildirimde bulunun.'
    },
    {
      active: false,
      disabled: false,
      name: 'Yasaklı Maddeler',
      desc: 'Güvenlik kontrolünde yasaklı maddeler, sıvılar ve kesici eşyalar hakkında bilgi almak için güvenlik kuralları sayfamızı ziyaret edin. Bu maddeler havaalanına sokulamayacak ve güvenlik sorunlarına yol açabilir.'
    },
    {
      active: false,
      disabled: false,
      name: 'Kişisel Güvenlik',
      desc: 'Güvenlik personelinin talimatlarına uymalısınız. Herhangi bir şüpheli durum veya güvenlik ihlali derhal bildirilmeli ve işbirliği yapılmalıdır.'
    },
    {
      active: false,
      disabled: false,
      name: 'Genel Davranış',
      desc: 'Diğer yolcuların konforunu sağlamak için saygılı ve anlayışlı davranışlarda bulunmalısınız. Gürültü yapmaktan, rahatsız edici davranışlardan kaçının.'
    },
    {
      active: false,
      disabled: false,
      name: 'Sigara İçme',
      desc: 'Uçak içinde ve havaalanı içinde sigara içmek yasaktır. Sigara içme alanlarını kullanmalısınız.'
    },
    {
      active: false,
      disabled: false,
      name: 'Sağlık Bilgileri',
      desc: 'Özellikle bulaşıcı hastalıklar gibi sağlık sorunlarınız varsa, uçuş öncesinde doktorunuza danışın. Sağlık durumunuzla ilgili gerekli bilgileri hava yolu şirketine bildirmeniz gerekebilir.'
    },
    {
      active: false,
      disabled: false,
      name: 'Acil Durumlar',
      desc: 'Acil durum prosedürleri hakkında bilgi edinmeli ve acil durum ekipmanlarını nasıl kullanacağınızı öğrenmelisiniz.'
    },
  ];
}
