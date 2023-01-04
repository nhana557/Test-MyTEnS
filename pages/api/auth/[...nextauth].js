import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github"

export default NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    secret: process.env.KEY_SECRET
})