import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IRegisterAnnouncement, IRegisterAnnouncementData } from "./dto/create.announcement.dto";
import { IUpdateAnnouncement } from "./dto/update.announcement.dto";

@Injectable()
export class AnnouncementService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.announcement.findMany({ include: { adsImages: true } })
  }

  findOne(id: string) {
    return this.prisma.announcement.findUnique({
      where: { id: id },
      include: { user: true },
    });
  }

  findAuctions() {
    return this.prisma.announcement.findMany({
      where: {
        typeAd: "auction"
      },
      include: {
        user: true
      }
    })
  }

  findCars() {
    return this.prisma.announcement.findMany({
      where: {
        typeAd: "sale",
        vehicleType: "car"
      },
      include: {
        user: true
      }
    })
  }

  findMotorbikes() {
    return this.prisma.announcement.findMany({
      where: {
        typeAd: "sale",
        vehicleType: "motorbike"
      },
      include: {
        user: true
      }
    })
  }

  async create(registerAnnouncementData: IRegisterAnnouncementData) {
    const { adsImages, ...rest } = registerAnnouncementData

    const data = new IRegisterAnnouncement(rest)
    const announcement = await this.prisma.announcement.create({ data: data })

    await this.waitCreateAdsImages(adsImages, announcement.id)

    const announcementComplete = await this.prisma.announcement.findUnique({ where: { id: announcement.id }, include: { adsImages: true } })
    return announcementComplete
  }

  async waitCreateAdsImages(adsImages: string[], announcementId: string) {
    for (let index in adsImages) {
      const adImageData = {
        url: adsImages[index],
        announcementId: announcementId
      }
      const adImage = await this.prisma.adsImages.create({ data: adImageData })
    }
  }

  update(id: string, updateAnnouncement: IUpdateAnnouncement) {
    return this.prisma.announcement.update({
      where: { id: id },
      data: updateAnnouncement,
    });
  }

  remove(id: string) {
    return this.prisma.announcement.delete({ where: { id: id } });
  }
}
