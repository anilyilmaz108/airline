
    // Uçuş Bilgileri DB Alanı
    /**
     * id  -> bilet alırken
     * userId -> bilet alırken
     * PNRNO -> bilet alırken
     * earningAirScore -> check-in sonrası
     * fromCity -> bilet alırken
     * toCity -> bilet alırken
     * dateFirst -> bilet alırken
     * dateLast -> bilet alırken
     * hourFirst(hangi saatlerde) -> bilet alırken
     * hourLast(hangi saatlerde) -> bilet alırken
     * priceFirst -> bilet alırken
     * priceLast -> bilet alırken
     * adultNumber -> bilet alırken
     * childNumber -> bilet alırken
     * babyNumber -> bilet alırken
     * flightTimeFirst(uçuş süresi) -> bilet alırken
     * flightTimeLast(uçuş süresi) -> bilet alırken
     * package(bagaj hakkı için) -> eco - classic - premium -> bilet alırken + check-in
     * flexFirst -> bilet alırken
     * flexLast -> bilet alırken
     * seatFirst -> bilet alırken + check-in
     * seatLast -> bilet alırken + check-in
     * totalPrice -> bilet alırken + check-in
     * operationDate(created_at görevi görür) -> bilet alırken
     */

export interface FlightModel {
    id?: string;
    userId?: string;
    PNRNO?: string;
    earningAirScore?: number; 
    fromCity?: string;
    toCity?: string;
    dateFirst?: Date | number;
    dateLast?: Date | number;
    hourFirst?: Date | number;
    hourLast?: Date | number;
    priceFirst?: number;
    priceLast?: number;
    adultNumber?: string;
    childNumber?: string;
    babyNumber?: string;
    flightTimeFirst?: string;
    flightTimeLast?: string;
    package?: string;
    flexFirst?: boolean;
    flexLast?: boolean;
    seatFirst?: string;
    seatLast?: string;
    totalPrice?: number;
    operationDate?: Date | number;
}
