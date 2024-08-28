import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-antalya',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzStatisticModule, NzSkeletonModule, NzGridModule, NzTypographyModule, NzDividerModule],
  templateUrl: './antalya.component.html',
  styleUrl: './antalya.component.less'
})
export class AntalyaComponent {
  items = [
    {
      "id" : 1,
      "image" : "https://www.novacar.com.tr/upload/news/duden-selalesi_original.webp",
      "title" : "Düden Şelalesi",
      "subtitle" : "Antalya’da görülmesi gereken yerler arasında bulunan Düden Şelalesi’ne Antalya merkezden ulaşımı son derece rahat ve kolaydır. Düden Şelalesi, Kepez ilçesinde yer alıyor. Özellikle yaz aylarında en popüler yerlerden olan Düden Şelalesi, iki kola ayrılarak Antalya falezlerinden 40 km yükseklikten Akdeniz’e dökülerek mutlaka görülmeye değer harika bir manzara oluşturuyor. Hiçbir şey yapmadan yalnızca suyun o sesiyle bile büyülenebilirsiniz. Elbette yapılacak başka pek çok keyifli etkinlik mevcut; alan içerisinde seyir terasları, yürüyüş yolları, kafeler, restoranlar, hediyelik eşya dükkanları da yer alıyor. Manzaranın tadına vardıktan sonra huzurlu bir doğa yürüyüşü yapabilir ve ardından mis gibi bir kahve keyfi yapabilirsiniz. Yaz tatili için geldiğinizde buradaki serinliğin de Antalya’nın ikliminde çok iyi geleceğini şimdiden söyleyelim." 
    },
    {
      "id" : 2,
      "image" : "https://www.novacar.com.tr/upload/news/olimpos-antik-kenti_original.webp",
      "title" : "Olimpos Antik Kenti",
      "subtitle" : "Antalya’da görülmesi gereken yerler arasında yer alan ve bölgedeki en büyük liman kentlerinden biri olan Olimpos Antik Kenti, Antalya’nın güney sahilinde konumlanmaktadır. Tarih ve kültür gezisine çıkmış olan ilgililerin yoğun olarak ilgi gösterdiği antik kent, ilk olarak M.Ö 160 yılında inşa edilmiş ve sonrasında da 11. ve 12. Yüzyıl dönemlerinde de Rodos şövalyeleri ve Venedikliler yeniden inşa etmişlerdir. Olimpos Antik Kenti’ni gezerken Roma dönemine ait olan tapınaklar, tüm görkemiyle hala ayakta olan bir Orta Çağ kalesi, agora, antik liman gibi pek çok tarihi eseri göreceksiniz. Olimpos Antik Kenti, haftanın her günü 08.00-21.00 saatleri arasında yerli yabancı turistlerini ağırlıyor." 
    },
    {
      "id" : 3,
      "image" : "https://resim.gezinomi.com/assets/customhtmleditor/shutterstock_338801360-2.02.2021191827.jpg",
      "title" : "Side Antik Kenti",
      "subtitle" : "Side Antik Kenti, Antalya’nın Manavgat ilçesine bağlı Selimiye Mahallesi sınırları içerisinde yer almaktadır. Side Antik Kenti’ni ziyaret edebilmek için özel aracınızla Mersin – Antalya yolunu Manavgat’a kadar takip ederek, Selimiye yönüne devam etmeniz gerekmektedir. Kente ayrıca taksi veya Side dolmuşlarıyla da gidilebilmektedir. Manavgat’ın popüler tatil merkezlerinden olan Side’nin tarihe tanıklık etmiş yapılarından olan Side Antik Kenti M.Ö. 1. yüzyılda inşa edilmiştir. Liman kenti olarak uzun bir süre kullanılmış olan Side Antik Kenti içerisinde kent surları ve sütunlu cadde, en çok dikkat çeken yapılar arasındadır. Side Antik Kenti ziyaretlerinizde mutlaka görmeniz gereken yapılardan olan Side Antik Tiyatrosu, 17.000 kişilik kapasitesi ile oldukça etkileyici bir görünüme sahiptir. Antik kent içerisinde yer alan Side Müzesi de bölgede gezilebilecek noktalar arasındadır. Antalya tatilinde mutlaka ziyaret etmeniz gereken destinasyonlardan olan Side Antik Kenti, haftanın her günü 08:30 ile 19:30 saatleri arasında ziyaret edilebilmektedir." 
    },
    
  ]
}
