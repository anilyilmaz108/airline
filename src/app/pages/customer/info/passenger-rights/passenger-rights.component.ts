import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
@Component({
  selector: 'app-passenger-rights',
  standalone: true,
  imports: [NzDividerModule, CommonModule, NzTypographyModule, NzImageModule, RouterLink],
  templateUrl: './passenger-rights.component.html',
  styleUrl: './passenger-rights.component.less'
})
export class PassengerRightsComponent {
  data = [
   {
    title: 'Uçuş Gecikmeleri ve İptalleri',
    desc: 'Eğer uçuşunuz planlanan kalkış saatinden 2 saatten fazla gecikirse, yemek, içecek ve gerekli durumlarda konaklama hizmetleri sunulur. Ayrıca, gecikme süresine göre tazminat hakkınız olabilir. Uçuşunuz iptal edilirse, alternatif uçuş seçenekleri sunulur veya biletinizin ücretinin geri ödemesi yapılır. Uçuş iptalleri hakkında detaylı bilgi ve tazminat hakları için iptal politikamız sayfasını ziyaret edebilirsiniz.'
   },
   {
    title: 'Kaybolan ve Geciken Bagaj',
    desc: 'Eğer bagajınız kaybolur veya gecikirse, derhal havaalanı yetkililerine bildirmeniz gerekmektedir. Bagajınızın bulunması ve teslim edilmesi sürecinde destek alabilirsiniz. Kaybolan bagaj için tazminat başvurusu yapabilir ve gecikme süresine göre zararlarınızı karşılayabiliriz.'
   },
   {
    title: 'Yetersiz Hizmet ve Şikayetler',
    desc: 'Hizmet kalitesiyle ilgili herhangi bir sorun yaşarsanız, müşteri hizmetlerimiz ile iletişime geçebilirsiniz. Şikayetlerinizi bildirmeniz halinde, sorunlarınız en kısa sürede çözülmeye çalışılacak ve geri bildirimleriniz dikkate alınacaktır.'
   },
   {
    title: 'Engelli Yolcu Hakları',
    desc: 'Engelli yolcular için özel hizmetler ve yardımcı araçlar sunulmaktadır. Uçuş öncesi taleplerinizi bize bildirerek, ihtiyacınıza uygun hizmetlerin hazırlanmasını sağlayabilirsiniz. Engelli yolcu hizmetleri hakkında daha fazla bilgiye buradan ulaşabilirsiniz.'
   },
   {
    title: 'Ücret İadesi ve Tazminat',
    desc: 'Biletinizin iptali, değişikliği veya uçuş sorunları durumunda ücret iadesi ve tazminat hakkınız bulunmaktadır. Bu süreçlerle ilgili detaylı bilgi ve başvuru formuna ücret iadesi ve tazminat sayfasından erişebilirsiniz.'
   },
   {
    title: 'Haklarınızla İlgili Yardım',
    desc: 'Yolcu haklarınızla ilgili daha fazla bilgi almak veya yardım talep etmek için yardım merkezi veya iletişim formu üzerinden bizimle iletişime geçebilirsiniz. Amacımız, size en iyi deneyimi sunmak ve herhangi bir sorun yaşamanız durumunda yanınızda olmaktır.'
   }
  ];
}
