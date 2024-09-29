/*
  Warnings:

  - Added the required column `amount` to the `Deposite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Deposite" DROP CONSTRAINT "Deposite_depositeid_fkey";

-- AlterTable
ALTER TABLE "Deposite" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "session" TEXT,
ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "depositeid" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "sitedetails" (
    "uuid" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "phone" TEXT,
    "logo" TEXT,
    "logo2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sitedetails_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "investmentplan" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "for" INTEGER NOT NULL,
    "every" INTEGER NOT NULL,
    "logo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investmentplan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personinvested" (
    "uuid" TEXT NOT NULL,
    "userid" INTEGER,
    "plsnid" INTEGER,

    CONSTRAINT "Personinvested_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "userId" INTEGER,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "withdrawal" (
    "id" SERIAL NOT NULL,
    "withdrwalid" TEXT NOT NULL,
    "userId" INTEGER,
    "amount" INTEGER NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "session" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sitedetails_uuid_key" ON "sitedetails"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "investmentplan_id_key" ON "investmentplan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "investmentplan_uuid_key" ON "investmentplan"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Personinvested_uuid_key" ON "Personinvested"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Personinvested_userid_key" ON "Personinvested"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "Personinvested_plsnid_key" ON "Personinvested"("plsnid");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_id_key" ON "Notification"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_uuid_key" ON "Notification"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "withdrawal_id_key" ON "withdrawal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "withdrawal_withdrwalid_key" ON "withdrawal"("withdrwalid");

-- AddForeignKey
ALTER TABLE "Personinvested" ADD CONSTRAINT "Personinvested_plsnid_fkey" FOREIGN KEY ("plsnid") REFERENCES "investmentplan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personinvested" ADD CONSTRAINT "Personinvested_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposite" ADD CONSTRAINT "Deposite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawal" ADD CONSTRAINT "withdrawal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
