export type TBike = {
    _id:string;
    name: string;
    description: string;
    pricePerHour: number;
    isAvailable?: boolean;
    image:string;
    cc: number;
    year: number;
    model: string;
    brand: string;
}


export type TRental = {
    userId?: string;
    bikeId: string;
    startTime: Date;
    returnTime?: Date;
    totalCost?: number;
    isReturned?: boolean;
    isPaid?: boolean;
    transactionId: string;
}