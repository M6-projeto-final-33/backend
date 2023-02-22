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

@Controller("announcements")
export class AnnoucementsController {
    constructor(private announcementService: AnnouncementService) { }

    @Get()
    findAll() {
        return this.announcementService.findAll()
    }

    @Post()
    create(@Body() createData: IRegisterAnnouncement) {
        return this.announcementService.create(createData)
    }
}
