import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client/wasm";
declare global {
    var prisma: PrismaClient | undefined;
}

export const dbConnetc = global.prisma || new PrismaClient();

if (process.env.NODE_ENV != "production") global.prisma = dbConnetc;