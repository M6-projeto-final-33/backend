import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IRegisterAnnouncement, IRegisterAnnouncementData } from "./dto/create.announcement.dto";

@Injectable()
export class AnnouncementService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.announcement.findMany({ include: { adsImages: true } })
    }

    async create(registerAnnouncementData: IRegisterAnnouncementData) {
        const { adsImages, ...rest } = registerAnnouncementData

        console.log(adsImages)

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
            console.log(adImage)
        }
    }
}
