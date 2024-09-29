-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" INTEGER,
ADD COLUMN     "firstname" TEXT,
ADD COLUMN     "lastname" TEXT,
ADD COLUMN     "totaldepo" INTEGER,
ADD COLUMN     "totalearn" INTEGER,
ADD COLUMN     "totalwith" INTEGER,
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
