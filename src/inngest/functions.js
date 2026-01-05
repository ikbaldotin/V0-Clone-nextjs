import { inngest } from "./client";
import { createAgent, openai } from "@inngest/agent-kit";
import Sandbox from "@e2b/code-interpreter"
export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "agent/hello" },
    async ({ event, step }) => {
        const sandboxId = await step.run("get-sandbox-id", async () => {
            const sandbox = await Sandbox.create("v0-nextjs-build-v2")
            return sandbox.sandboxId
        })
        const helloAgent = createAgent({
            name: "hello-agent",
            description: "A simple agent that say hello",
            system: "You are a helpful assitant.Always greet with enthusiasm",
            model: openai({ model: "chatgpt-4o-latest" })
        })
        const { output } = await helloAgent.run("say hello to the user")
        const sandboxUrl = await step.run("get-sandbox-url", async () => {
            const sandbox = await Sandbox.connect(sandboxId)
            const host = sandbox.getHost(3000)
            return `http://${host}`
        })
        return {
            message: output[0].content
        }
    },
);