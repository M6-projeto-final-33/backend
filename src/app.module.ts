import { Module, Global } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { UserController } from "./User/user.controller";
import { UserService } from "./User/user.service";

@Global()
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class AppModule {}
