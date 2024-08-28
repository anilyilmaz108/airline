import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@Component({
  selector: 'app-izmir',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzStatisticModule, NzSkeletonModule, NzGridModule, NzTypographyModule, NzDividerModule],
  templateUrl: './izmir.component.html',
  styleUrl: './izmir.component.less'
})
export class IzmirComponent {
  items = [
    {
      "id" : 1,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/izmir-saat-kulesi-37062.webp",
      "title" : "İzmir Saat Kulesi",
      "subtitle" : "İzmir'in en ünlü simgesel yapısı olan İzmir Saat Kulesi, 1901 yılında Osmanlı padişahı II. Abdülhamit'in tahta çıkışının 25. yılını kutlamak amacıyla inşa edilmiş bir şaheser. Kemeraltı Çarşısı’nın girişinde ve Konak Yalı Cami'nin yanı başında yer alan 25 metre yükseklikte 4 katlı etkileyici saat kulesi, özgün mimarisi ile diğer Osmanlı saat kulelerinden ayrılıyor. Ünlü bir Fransız mimar tarafından tasarlanan İzmir Saat Kulesi, kesme taşlarla inşa edilmiş ve etkileyici taş kabartmalar ile süslü. Saat kulesinin çevresindeki dört çeşme ve Kuzey Afrika’yı simgeleyen kolonlar da görülmeye değer güzellikte. Sultan II. Abdülhamid'in tuğrasının da kabartma olarak işlendiği, 81 m2 taban genişliğine sahip İzmir Saat Kulesi’nde fotoğraf çekmeden şehirden ayrılmayın." 
    },
    {
      "id" : 2,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/izmir-asansor-37060.webp",
      "title" : "İzmir Tarihi Asansör",
      "subtitle" : "İzmir'in simgesel yapılarından biri haline gelen ve 1907 yılında bir iş adamı tarafından yaptırılan İzmir Tarihi Asansör, 58 metre yüksekliği ile hemen dikkatinizi çekecek. Mithatpaşa Caddesi ile Şehit Nihatbey Caddesi arasında yer alan ve sunduğu panoramik İzmir manzaraları ile ünlü İzmir Tarihi Asansör, 155 basamaktan oluşuyor. Asansörün en üst katında ise bir kafeterya ve seyir terası var. Etkileyici klasik taş mimarisiyle görülmeye değer güzellikteki Tarihi Asansör’ün terasında İzmir’in panoramik manzaraları eşliğinde çayınızı yudumlayabilir ve harika fotoğraflar çekebilirsiniz." 
    },
    {
      "id" : 3,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/konak-meydani-349.webp",
      "title" : "Konak Meydanı",
      "subtitle" : "Resmi adı Atatürk Meydanı olan ve İzmir'in en hareketli meydanlarından biri olan Konak Meydanı; İlk Kurşun Anıtı, İzmir Saat Kulesi ve Konak Yalı Camii gibi pek çok simgesel yapıya ev sahipliği yapıyor. Günün her saati hareketli olan ve İzmir’in önemli buluşma noktalarından Konak Meydanı; Ege Deniz manzaralı parklar, yürüyüş yolları, onlarca mağaza, kafe ve kaliteli restoranlarıyla İzmir’i keşfetmeye başlamak için en ideal nokta. Akşamları sokak müzisyenlerini dinleyebileceğiniz Konak Meydanı, aynı zamanda Kıbrıs Şehitler Caddesi ve Alsancak Sevgi Yolu gibi popüler yerlere de oldukça yakın." 
    },
    
  ]
}
