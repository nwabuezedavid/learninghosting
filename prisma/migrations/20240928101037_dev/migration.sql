/*
  Warnings:

  - You are about to drop the column `isverified` on the `Deposite` table. All the data in the column will be lost.
  - You are about to drop the column `session` on the `Deposite` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `withdrawal` table. All the data in the column will be lost.
  - You are about to drop the column `isverified` on the `withdrawal` table. All the data in the column will be lost.
  - You are about to drop the column `session` on the `withdrawal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Deposite" DROP COLUMN "isverified",
DROP COLUMN "session",
ALTER COLUMN "approved" DROP NOT NULL,
ALTER COLUMN "approved" DROP DEFAULT,
ALTER COLUMN "approved" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "withdrawal" DROP COLUMN "amount",
DROP COLUMN "isverified",
DROP COLUMN "session",
ALTER COLUMN "approved" DROP NOT NULL,
ALTER COLUMN "approved" DROP DEFAULT,
ALTER COLUMN "approved" SET DATA TYPE TEXT;
