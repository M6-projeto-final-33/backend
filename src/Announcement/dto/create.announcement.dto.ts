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

export interface IRegisterAnnouncementProps {
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

export class IRegisterAnnouncement {

    constructor(obj: IRegisterAnnouncementProps) {
        Object.assign(this, obj)
    }

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
