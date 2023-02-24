export interface IRegisterAnnouncementData {
    typeAd: string;
    title: string;
    year: string;
    mileage: string;
    price: number;
    description: string;
    vehicleType: string;
    coverImg: string;
    userId: never;
    isActive: boolean;
    adsImages: string[];
}

export class IRegisterAnnouncement {
    typeAd: string;
    title: string;
    year: string;
    mileage: string;
    price: number;
    description: string;
    vehicleType: string;
    coverImg: string;
    userId: never;
    isActive: boolean;
}
