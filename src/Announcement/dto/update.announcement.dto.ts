export class IUpdateAnnouncement {
  typeAd?: "sale" | "auction";
  title?: string;
  year?: string;
  mileage?: string;
  price?: number;
  description?: string;
  vehicleType?: "car" | "motorbike";
  coverImg?: string;
}
