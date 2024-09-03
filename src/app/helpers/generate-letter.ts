export const generateLetter = {
    // Gidiş - Dönüş bilgileri için
    getFirstWord(str: string): string {
        return str.split(' ')[0];
      },

      // gelen telefon numarasını -> +90 (555) 555 55 55 şeklinde
      formatPhoneNumber(phoneNumber: string): string {
        const cleaned = phoneNumber.replace(/\D/g, '');
        
        const countryCode = '+90';
        const areaCode = cleaned.slice(0, 3);
        const firstPart = cleaned.slice(3, 6);
        const secondPart = cleaned.slice(6, 8);
        const thirdPart = cleaned.slice(8, 10);
      
        return `${countryCode} (${areaCode}) ${firstPart} ${secondPart} ${thirdPart}`;
      }
}