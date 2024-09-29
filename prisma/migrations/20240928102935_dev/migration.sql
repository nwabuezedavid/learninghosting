/*
  Warnings:

  - You are about to drop the `wallet` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Deposite" ADD COLUMN     "walletId" INTEGER;

-- AlterTable
ALTER TABLE "withdrawal" ADD COLUMN     "amount" INTEGER,
ADD COLUMN     "wallet" TEXT;

-- DropTable
DROP TABLE "wallet";

-- CreateTable
CREATE TABLE "Wallet" (
    "uuid" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "logo2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_uuid_key" ON "Wallet"("uuid");

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "Deposite"("depositeid") ON DELETE RESTRICT ON UPDATE CASCADE;
