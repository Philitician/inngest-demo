import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { name: "Hello World" },
  { event: "test/hello-world" },
  async ({ event, step }) => {
    await step.sleep("1s");
    const echo1 = await step.run("echo", echo);
    const echo2 = await step.run("echo", echo);
    return { event, body: { echo1, echo2 } };
  }
);

const echo = async () => await "echo";
