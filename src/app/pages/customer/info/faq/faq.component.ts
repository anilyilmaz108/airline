import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NzTypographyComponent, NzCollapseModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.less'
})
export class FaqComponent {
  panels = [
    {
      active: true,
      name: 'Uçuş rezervasyonumu nasıl yapabilirim?',
      disabled: false,
      description: 'Uçuş rezervasyonunuzu web sitemiz üzerinden kolayca yapabilirsiniz. Anasayfada yer alan "Rezervasyonlarım" butonuna tıklayın, uçuş bilgilerinizi girin ve arama yapın. Seçtiğiniz uçuşu onayladıktan sonra, yolcu bilgilerinizi girip ödeme işlemini tamamlayarak rezervasyonunuzu gerçekleştirebilirsiniz.'
    },
    {
      active: false,
      disabled: false,
      name: 'Rezervasyonumu nasıl değiştirebilirim?',
      description: 'Rezervasyonunuzu değiştirmek için Rezervasyonlarım bölümüne gidin ve giriş yaparak ilgili rezervasyonu seçin. Rezervasyon detaylarını güncellemek için talimatları izleyin. Değişiklikleriniz onaylandıktan sonra yeni uçuş bilgileriniz e-posta ile gönderilecektir. Rezervasyon değişiklikleri belirli şartlara bağlı olarak ek ücretler içerebilir.'
    },
    {
      active: false,
      disabled: false,
      name: 'Biletimi nasıl iptal edebilirim?',
      description: 'Biletinizi iptal etmek için Rezervasyonlarım sayfasına giriş yaparak ilgili rezervasyonu seçin ve iptal işlemini başlatın. İptal işlemi tamamlandığında, iptal politikasına bağlı olarak ücret iadesi yapılacaktır. İptal işlemi için geçerli kurallar ve ücretler hakkında daha fazla bilgi almak için iptal politikamız sayfasını ziyaret edebilirsiniz.'
    },
    {
      active: false,
      name: 'Bagaj hakkım nedir?',
      disabled: false,
      description: 'Standart bagaj hakkınız, ekonomi sınıfında 1 adet el bagajı ve 1 adet kabin bagajıdır. İş sınıfı ve ilk sınıf yolcuları için bagaj hakları farklı olabilir. Bagaj haklarınız hakkında detaylı bilgiye Bagaj Politikamız sayfasından ulaşabilirsiniz. Ayrıca, ekstra bagaj hakkı satın almak isterseniz, rezervasyon sırasında veya havaalanında ek ücret karşılığında bunu yapabilirsiniz.'
    },
    {
      active: false,
      disabled: false,
      name: 'Ödeme seçeneklerim nelerdir?',
      description: 'Web sitemiz üzerinden bilet alırken kredi kartı, banka kartı ve çeşitli ödeme yöntemlerini kullanabilirsiniz. Ödeme seçeneklerimiz hakkında daha fazla bilgi almak için Ödeme Seçenekleri sayfasını ziyaret edebilirsiniz.'
    },
    {
      active: false,
      disabled: false,
      name: 'Uçuşumun gecikmesi veya iptali durumunda ne yapmalıyım?',
      description: 'Uçuşunuzun gecikmesi veya iptali durumunda, müşteri hizmetlerimizle iletişime geçebilir veya havaalanındaki müşteri hizmetleri noktasından yardım alabilirsiniz. Gecikme veya iptal durumunda uygulanacak politikalar ve haklarınız hakkında detaylı bilgiye Gecikme ve İptal Politikası sayfasından ulaşabilirsiniz.'
    },
    {
      active: false,
      disabled: false,
      name: 'Yolcu haklarım nedir?',
      description: 'Yolcu haklarınız, uçuşunuzla ilgili olası sorunlar durumunda size nasıl yardımcı olabileceğimiz konusunda bilgi sunar. Yolcu Hakları sayfamızda, haklarınız ve bunları nasıl kullanabileceğiniz hakkında detaylı bilgi bulabilirsiniz.'
    },
    {
      active: false,
      disabled: false,
      name: 'Hangi belgeleri yanımda bulundurmam gerekiyor?',
      description: 'Uçuşa başlamadan önce kimlik belgesi (pasaport, kimlik kartı veya ehliyet) ve biletinizin bir kopyasını yanınızda bulundurmanız gerekmektedir. Uluslararası uçuşlarda pasaportunuzun geçerlilik süresinin uçuş tarihinden itibaren en az 6 ay olması gerektiğini unutmayın. Daha fazla bilgi için Belgeler sayfamızı kontrol edebilirsiniz.'
    },
    {
      active: false,
      disabled: false,
      name: 'Havaalanında hangi hizmetler sunulmaktadır?',
      description: 'Havaalanlarında sunulan hizmetler hakkında bilgi almak için Havaalanı Hizmetleri sayfasını ziyaret edebilirsiniz. Bu hizmetler arasında dinlenme salonları, restoranlar, alışveriş noktaları ve diğer yolcu konfor hizmetleri yer almaktadır.'
    },
    {
      active: false,
      disabled: false,
      name: 'Şikayet veya geri bildirimde bulunmak istiyorum, ne yapmalıyım?',
      description: 'Her türlü şikayet ve geri bildiriminiz bizim için önemlidir. Şikayetlerinizi veya geri bildirimlerinizi Geri Bildirim Formu aracılığıyla iletebilirsiniz. Ayrıca, müşteri hizmetlerimize e-posta göndererek veya telefonla iletişime geçerek de şikayetlerinizi bildirebilirsiniz.'
    },
  ];
}
