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
import { IRegisterAnnouncement } from "./dto/create.announcement.dto";
import { IUpdateAnnouncement } from "./dto/update.announcement.dto";

@Controller("announcements")
export class AnnoucementsController {
  constructor(private announcementService: AnnouncementService) {}

  @Post()
  create(@Body() createData: IRegisterAnnouncement) {
    return this.announcementService.create(createData);
  }

  @Get()
  findAll() {
    return this.announcementService.findAll();
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
