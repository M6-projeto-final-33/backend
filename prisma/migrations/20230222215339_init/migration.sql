-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_announcements" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "typeAd" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "coverImg" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    CONSTRAINT "announcements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_announcements" ("coverImg", "createdAt", "description", "id", "mileage", "price", "title", "typeAd", "updatedAt", "userId", "vehicleType", "year") SELECT "coverImg", "createdAt", "description", "id", "mileage", "price", "title", "typeAd", "updatedAt", "userId", "vehicleType", "year" FROM "announcements";
DROP TABLE "announcements";
ALTER TABLE "new_announcements" RENAME TO "announcements";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
