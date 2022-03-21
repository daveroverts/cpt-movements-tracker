import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();
const adapter: Adapter = {
  ...PrismaAdapter(prisma),
  async linkAccount(account) {
    // Vatsim returns array scopes
    const newAccount = account;
    if (account.scopes instanceof Array) {
      newAccount.scope = account.scopes.join(",");
      delete newAccount.scopes;
    }
    await prisma.account.create({
      data: {
        ...newAccount,
      },
    });
  },
};

export default NextAuth({
  adapter,
  providers: [
    {
      id: "vatsim",
      name: "Vatsim Connect",
      type: "oauth",
      version: "2.0",
      token: {
        url: `${process.env.VATSIM_ISSUER}/oauth/token`,
        params: {
          grant_type: "authorization_code",
        },
      },
      authorization: {
        url: `${process.env.VATSIM_ISSUER}/oauth/authorize?response_type=code`,
        params: {
          scope: process.env.VATSIM_SCOPES,
        },
      },
      clientId: process.env.VATSIM_ID,
      clientSecret: process.env.VATSIM_SECRET,
      userinfo: `${process.env.VATSIM_ISSUER}/api/user`,
      profile(profile) {
        return {
          id: profile.data.cid,
          // name_first: profile.data.personal.name_first,
          // name_last: profile.data.personal.name_last,
          name: profile.data.personal.name_full,
          email: profile.data.personal.email,
          // country: profile.data.personal.country,
          // rating: profile.data.vatsim.rating,
          // pilotrating: profile.data.vatsim.pilotrating,
          // division: profile.data.vatsim.division,
          // region: profile.data.vatsim.region,
          // subdivision: profile.data.vatsim.subdivision,
        };
      },
    },
  ],
});
