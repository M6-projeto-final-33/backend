import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from "@nestjs/common";
import { IRegisterUserData } from "./dto/create.user.dto";
import { IUpdateUser } from "./dto/update.user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(":id")
  findUserById(@Param("id") id: string) {
    return this.userService.findUserById(id)
  }

  @Post()
  create(@Body() registerData: IRegisterUserData) {
    return this.userService.create(registerData);
  }
}
