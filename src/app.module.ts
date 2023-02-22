import { Module, Global } from "@nestjs/common";
import { AnnoucementsController } from "./Announcement/announcement.controller";
import { AnnouncementService } from "./Announcement/announcement.service";
import { PrismaService } from "./prisma/prisma.service";
import { UserController } from "./User/user.controller";
import { UserService } from "./User/user.service";

@Global()
@Module({
  imports: [],
  controllers: [UserController, AnnoucementsController],
  providers: [UserService, AnnouncementService, PrismaService],
})
export class AppModule { }
