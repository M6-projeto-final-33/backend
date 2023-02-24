import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IRegisterAnnouncement } from "./dto/create.announcement.dto";
import { IUpdateAnnouncement } from "./dto/update.announcement.dto";

@Injectable()
export class AnnouncementService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.announcement.findMany({});
  }

  findOne(id: string) {
    return this.prisma.announcement.findUnique({
      where: { id: id },
      include: { user: true },
    });
  }

  create(registerAnnouncementData: IRegisterAnnouncement) {
    return this.prisma.announcement.create({ data: registerAnnouncementData });
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
