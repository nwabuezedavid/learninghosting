-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT,
    "password" TEXT,
    "firstname" TEXT,
    "token" TEXT,
    "lastname" TEXT,
    "balance" INTEGER,
    "isverified" BOOLEAN NOT NULL DEFAULT true,
    "isbanner" BOOLEAN NOT NULL DEFAULT false,
    "totaldepo" INTEGER,
    "totalwith" INTEGER,
    "totalearn" INTEGER,
    "profileImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "Wallet" (
    "uuid" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "logo2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("uuid")
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
    "isverified" BOOLEAN NOT NULL DEFAULT true,
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
    "isverified" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Personinvested_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "userId" INTEGER,
    "isverified" BOOLEAN NOT NULL DEFAULT true,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposite" (
    "id" SERIAL NOT NULL,
    "depositeid" TEXT NOT NULL,
    "userId" INTEGER,
    "walletId" INTEGER,
    "amount" INTEGER NOT NULL,
    "approved" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deposite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "withdrawal" (
    "id" SERIAL NOT NULL,
    "withdrwalid" TEXT NOT NULL,
    "userId" INTEGER,
    "amount" INTEGER,
    "wallet" TEXT,
    "approved" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sitedetails_uuid_key" ON "sitedetails"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_uuid_key" ON "Wallet"("uuid");

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
CREATE UNIQUE INDEX "Deposite_id_key" ON "Deposite"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Deposite_depositeid_key" ON "Deposite"("depositeid");

-- CreateIndex
CREATE UNIQUE INDEX "withdrawal_id_key" ON "withdrawal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "withdrawal_withdrwalid_key" ON "withdrawal"("withdrwalid");

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "Deposite"("depositeid") ON DELETE RESTRICT ON UPDATE CASCADE;

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
