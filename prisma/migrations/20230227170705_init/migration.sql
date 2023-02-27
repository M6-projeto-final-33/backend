/*
  Warnings:

  - You are about to drop the column `user_id` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `cover_img` on the `announcements` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `announcements` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `announcements` table. All the data in the column will be lost.
  - You are about to drop the column `type_ad` on the `announcements` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `announcements` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `announcements` table. All the data in the column will be lost.
  - You are about to drop the column `vehicle_type` on the `announcements` table. All the data in the column will be lost.
  - You are about to drop the column `announcement_id` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `birth_date` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_type` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `ads_images` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverImg` to the `announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeAd` to the `announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleType` to the `announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `announcementId` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userType` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ads_images" DROP CONSTRAINT "ads_images_announcement_id_fkey";

-- DropForeignKey
ALTER TABLE "announcements" DROP CONSTRAINT "announcements_user_id_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_announcement_id_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_user_id_fkey";

-- DropIndex
DROP INDEX "addresses_id_key";

-- DropIndex
DROP INDEX "addresses_user_id_key";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "user_id",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "announcements" DROP COLUMN "cover_img",
DROP COLUMN "created_at",
DROP COLUMN "is_active",
DROP COLUMN "type_ad",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
DROP COLUMN "vehicle_type",
ADD COLUMN     "coverImg" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "typeAd" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "vehicleType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "announcement_id",
DROP COLUMN "created_at",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "announcementId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "birth_date",
DROP COLUMN "created_at",
DROP COLUMN "is_active",
DROP COLUMN "updated_at",
DROP COLUMN "user_image",
DROP COLUMN "user_type",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userImage" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "userType" TEXT NOT NULL;

-- DropTable
DROP TABLE "ads_images";

-- CreateTable
CREATE TABLE "adsImages" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "announcementId" TEXT NOT NULL,

    CONSTRAINT "adsImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_userId_key" ON "addresses"("userId");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adsImages" ADD CONSTRAINT "adsImages_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
