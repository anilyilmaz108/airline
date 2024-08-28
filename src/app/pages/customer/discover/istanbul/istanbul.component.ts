import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-istanbul',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzStatisticModule, NzSkeletonModule, NzGridModule, NzTypographyModule, NzDividerModule],
  templateUrl: './istanbul.component.html',
  styleUrl: './istanbul.component.less'
})
export class IstanbulComponent {

  items = [
    {
      "id" : 1,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/ayasofya-39474.webp",
      "title" : "Ayasofya Camii",
      "subtitle" : "İstanbul denince akla gelen ilk tarihi yapı tabii ki de geçmişte kilise ve müze olarak da kullanılan Ayasofya Camii. 537 yılında açılan ve Bizanslı mimarlar İsidoros ve Anthemios tarafından yapılan caminin en önemli özelliklerinden biri aynı yerde 3 kez inşa edilmiş bir yapı olması. Bir kilise olarak hizmet veren ve İstanbul’un fethinden sonra camiye çevrilen yapı, Bakanlar Kurulu kararı ile 1935-2020 yılları arasında müze olarak hizmet verdi. 2020 yılındacami statüsü ile hizmet vermeye başlayan Ayasofya, bugün sadece İstanbul’un değil dünyanın en önemli tarihi sembollerinden biri olarak kabul görüyor." 
    },
    {
      "id" : 2,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/kiz-kulesi-39480.webp",
      "title" : "Kız Kulesi",
      "subtitle" : "Salacak açıklarında yer alan Kız Kulesi hakkında bugüne dek çok sayıda rivayet ortaya atılmış ve yapı efsanelere konu olmuş. Üsküdar’da Bizans Dönemi’nden kalan tek eser olmasıyla öne çıkan yapı, M.Ö. 24. Yıla kadar eski bir tarihe sahip. Geçmişte Yunan döneminde bir mezara ev sahipliği yapmış yer, bugüne dek gümrük istasyonu, karantina odası gibi farklı işlevlerde kullanılmış olsa da asıl görevi hep gemilere yol göstermek olmuş. 2000 yılında restore edilen Kız Kulesi’nin içine bir de restoran eklenmiş ve bu sayede yapının turistik değeri artmış." 
    },
    {
      "id" : 3,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/kapali-carsi-39479.webp",
      "title" : "Kapalıçarşı",
      "subtitle" : "Dünyadaki ilk alışveriş merkezlerinden biri olan Kapalıçarşı, İstanbul’un en ikonik yapılarından biri. Beyazıt, Nuruosmaniye ve Mercan semtlerinin kesişim noktasında yer alan Kapalı Çarşı, 4.000 dükkanı ve yaklaşık 25.000 çalışanıyla adeta farklı bir dünya. Kapalıçarşı’ya gelmişken yalnızca burada gezerek şehrin ruhunu deneyimlemek bir seçenek iken başka bir seçeneğin daha var. O da buradaki dükkanlardan yiyecek, kıyafet ya da mücevher alışverişleri yapmak. Böylelikle İstanbul seyahatinden kendin için birkaç anıyı da yanında götürebilirsin. Yalnızca burada gezerek şehrin esnaf kültürü hakkında fikir sahibi olman da mümkün." 
    },
    
  ]
}
