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

@Controller("announcements")
export class AnnoucementsController {
    constructor(private announcementService: AnnouncementService) { }

    @Get()
    findAll() {
        return this.announcementService.findAll()
    }

    @Post()
    create(@Body() createData: IRegisterAnnouncementData) {
        return this.announcementService.create(createData)
    }
}
