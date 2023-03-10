import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from "@nestjs/common";
import { AnnouncementService } from "./announcement.service";
import { IRegisterAnnouncement, IRegisterAnnouncementData } from "./dto/create.announcement.dto";
import { IUpdateAnnouncement } from "./dto/update.announcement.dto";

@Controller("announcements")
export class AnnoucementsController {
  constructor(private announcementService: AnnouncementService) { }

  @Post()
  create(@Body() createData: IRegisterAnnouncementData) {
    return this.announcementService.create(createData)
  }

  @Get()
  findAll() {
    return this.announcementService.findAll();
  }

  @Get("auctions")
  findAuctions() {
    return this.announcementService.findAuctions();
  }

  @Get("cars")
  findCars() {
    return this.announcementService.findCars();
  }

  @Get("motorbikes")
  findMotorbikes() {
    return this.announcementService.findMotorbikes();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.announcementService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAnnouncement: IUpdateAnnouncement
  ) {
    return this.announcementService.update(id, updateAnnouncement);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.announcementService.remove(id);
  }
}
