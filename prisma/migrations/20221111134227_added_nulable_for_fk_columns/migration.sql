-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserCourses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataPurchased" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "courseId" INTEGER,
    CONSTRAINT "UserCourses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "UserCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UserCourses" ("courseId", "dataPurchased", "id", "userId") SELECT "courseId", "dataPurchased", "id", "userId" FROM "UserCourses";
DROP TABLE "UserCourses";
ALTER TABLE "new_UserCourses" RENAME TO "UserCourses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
