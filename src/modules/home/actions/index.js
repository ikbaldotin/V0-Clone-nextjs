"use server"
import { inngest } from "@/inngest/client"

export const Invoke = async () => {
    await inngest.send({
        name: "agent/hello"
    })
}