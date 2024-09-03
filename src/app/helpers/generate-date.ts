export const generateDate = {
    // Date -> Saat formatına (09.30)
    generateDateToHour(input: number | Date): string {
        let date: Date;
        if (typeof input === 'number') {
          date = new Date(input);
        } else {
          date = input;
        }
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      },

      // Date -> Saat formatına 1 saat 5dk ekler (10.35)
      generateDateToHourFlight(input: number | Date): string {
        let date: Date;
        if (typeof input === 'number') {
          date = new Date(input);
        } else {
          date = input;
        }
        // 1 saat ve 5 dakika ekleyelim
        date.setHours(date.getHours() + 1);
        date.setMinutes(date.getMinutes() + 5);

        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        return `${hours}:${minutes}`;
    },

    // Date -> gün ay, yıl formatına (29 Oca, Pazar)
    generateFormattedDate(input: number | Date): string {
        let date: Date;
        if (typeof input === 'number') {
          date = new Date(input);
        } else {
          date = input;
        }
      
        // Gün, ay ve yıl formatı için Intl.DateTimeFormat kullan
        const options: Intl.DateTimeFormatOptions = {
          day: '2-digit', // Gün
          month: 'short', // Kısa ay ismi (Oca, Şub vs.)
          weekday: 'long', // Tam gün ismi (Pazar, Pazartesi vs.)
        };
      
        const formattedDate = new Intl.DateTimeFormat('tr-TR', options).format(date);
        return formattedDate;
      },

      // Full tarih (05/04/2024 - 20:40)
      generateFullDateTime(input: number | Date): string {
        let date: Date;
      
        if (typeof input === 'number') {
          date = new Date(input);
        } else {
          date = input;
        }
      
        // Gün, Ay, Yıl, Saat ve Dakikalar
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth 0-indexed, bu yüzden +1 ekliyoruz
        const year = date.getFullYear().toString();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
      
        // İstenen formatta string geri döndür
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
      },

        // Full tarihe 1 saat 5 dakika ekler (05/04/2024 - 20:40)
        generateFullDateTimeArrive(dateInput: number | Date): string {
        let date: Date;
        if (typeof dateInput === 'number') {
          date = new Date(dateInput);
        } else {
          date = dateInput;
        }
        // 1 saat ve 5 dakika ekle
        date.setHours(date.getHours() + 1);
        date.setMinutes(date.getMinutes() + 5);
      
        // Tarih ve saat formatını belirle
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
      
        // Formatı belirle ve döndür
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
      }      
      
}