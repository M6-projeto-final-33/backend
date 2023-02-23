import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IRegisterAnnouncement } from "./dto/create.announcement.dto";

@Injectable()
export class AnnouncementService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.announcement.findMany({});
    }

    create(registerAnnouncementData: IRegisterAnnouncement) {
        return this.prisma.announcement.create({ data: registerAnnouncementData })
    }
}
