-- AlterTable
ALTER TABLE "Deposite" ADD COLUMN     "isverified" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "isverified" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Personinvested" ADD COLUMN     "isverified" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isbanner" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isverified" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "investmentplan" ADD COLUMN     "isverified" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "withdrawal" ADD COLUMN     "isverified" BOOLEAN NOT NULL DEFAULT true;
