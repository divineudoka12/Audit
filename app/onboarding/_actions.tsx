"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export const completeOnboarding = async (data: Record<string, any>) => {
    const client = await clerkClient()
    const { userId } = await auth();

    if (!userId) {
        return { message: "No Logged In User" }
    }

    try {
        await client.users.updateUser(userId, {
            publicMetadata: {
                onboardingComplete: true,
                ...data, // Store onboarding data
            },
        });
        return { message: "User metadata Updated" }
    } catch (e) {
        console.log("error", e)
        return { message: "Error Updating User Metadata" }
    }

}