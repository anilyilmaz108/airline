import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-ankara',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzStatisticModule, NzSkeletonModule, NzGridModule, NzTypographyModule, NzDividerModule],
  templateUrl: './ankara.component.html',
  styleUrl: './ankara.component.less'
})
export class AnkaraComponent {
  items = [
    {
      "id" : 1,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/ankara-anitkabir-2496.webp",
      "title" : "Anıtkabir",
      "subtitle" : "Türkiye Cumhuriyeti’nin atası Mustafa Kemal Atatürk’ün anıt mezarı olan Anıtkabir, hayatın boyunca bir kerede olsa mutlaka görmen gereken yerlerden. Park çeşitli ülkeler ve Türkiye’den ağaçlarla dolu.  Anıtkabir’in Anıt bloğu Aslanlı Yol, Tören Meydanı ve Mozole’den oluşuyor. Ayrıca Anıtkabir’de 10 kule bulunuyor. Bu kuleler devletin ve milletin oluşumundaki önemli kavramlar olan Hürriyet, İstiklal, Mehmetçik, Zafer, Barış, 23 Nisan, Misak-ı Milli, İnkılap, Cumhuriyet ve Müdafaa- ı Hukuk gibi kavram ve olayları temsil ediyor." 
    },
    {
      "id" : 2,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/augustus-tapinagi-35724.webp",
      "title" : "Augustus Tapınağı",
      "subtitle" : "İmparator Augustus ve kentin tanrıçası Roma’ya ithaf edilerek inşa edilmiş tapınak yalnızca Ankara için değil tüm dünya için oldukça önemli bir yapı. ‘’Tanrılaşmış Augustus’un Yaptığı İşler’’ yazıtı tapınağın duvarlarına yazılmış. Augustus’un başardığı işleri anlatan çift dilli yazıt dünya tarihi açısından büyük değer taşıyor çünkü; kaybolan orijinal yazıtın korunmuş tek tam kopyası ve Roma devrini anlatan en değerli belgelerden." 
    },
    {
      "id" : 3,
      "image" : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/haci-bayram-35707.webp",
      "title" : "Hacı Bayram Camii",
      "subtitle" : "Augustus Tapınağının bitişiğinde bulunan cami, Bayrami tarikatının kurucusu Hacı Bayram Veli adına yapılmış. 17.- 18. yüzyıl camilerinin özelliklerini taşıyan caminin içi çiçek desenleri ve Kütahya çinileri ile süslü. Mihrap alınlığında ise Kur’an’dan sureler yer alıyor. Ankara’daki en güzel 15. yüzyıl türbe örneklerinden olan Hacı Bayram Türbesi, caminin mihrap duvarına bitişik. Türbenin ahşap kapıları ise Ankara Etnografya Müzesi’nde sergileniyor." 
    },
    
  ]
}
