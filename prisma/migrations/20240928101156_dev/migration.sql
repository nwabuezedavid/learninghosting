-- CreateTable
CREATE TABLE "wallet" (
    "uuid" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "logo2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "wallet_uuid_key" ON "wallet"("uuid");
