export const generateId =  {
  // Üye olmayan ID ve PNRNO için
    generateUniqueId(length: number): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          result += chars[randomIndex];
        }
        console.log('generate ID', result);
        return result;
      },

      // Rastgele Koltuk | Ön Koltuklar ve Ekstra Diz Mesafesi için
      generateRandomSeat(): string {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
      },

      // Pencere Kenarı Koltuk
      generateWindowSeat(): string {
        const letters = ['A', 'F'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
      },

      // Diğer Koltuk
      generateSideSeat(): string {
        const letters = ['B', 'E'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
      },

      // Koltuklar için Sayı
      getRandomNumber(min: number, max: number): string {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber.toString();
      },

      // Bilet No için
      generateRandom13DigitNumber(): string {
        let randomNumber = '';
        for (let i = 0; i < 13; i++) {
          const digit = Math.floor(Math.random() * 10);
          randomNumber += digit.toString();
        }
        return randomNumber;
      }
}
  