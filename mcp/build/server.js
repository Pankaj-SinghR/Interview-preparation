import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import fs from "node:fs/promises";
const server = new McpServer({
    name: "test",
    version: "1.0.0",
});
server.registerTool("create-user", {
    description: "create a new user in the system",
    inputSchema: {
        name: z.string().describe("The name of the user to create"),
        email: z.string().email().describe("The email of the user to create"),
        address: z.string().optional().describe("The address of the user"),
        phone: z.string().optional().describe("The phone number of the user"),
    },
    annotations: {
        title: "Create User Tool",
        destructiveHint: true,
        readOnlyHint: false,
        idempotentHint: false, // what it does mean that value won't change even if called multiple times with same input
        openWorldHint: true,
    },
}, async (params) => {
    try {
        const id = await createUserInDatabase(params);
        return {
            content: [
                {
                    type: "text",
                    text: `User created with ID: ${id}`
                }
            ]
        };
    }
    catch (error) {
        console.error(error);
        return {
            content: [
                {
                    type: "text",
                    text: "Failed to create user"
                }
            ]
        };
    }
});
async function createUserInDatabase(user) {
    const filePath = new URL("./data/users.json", import.meta.url).pathname;
    const fileContent = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(fileContent);
    const id = users.length + 1;
    users.push({
        id,
        ...user
    });
    await fs.writeFile(filePath, JSON.stringify(users, null, 2), {
        encoding: "utf-8"
    });
    return id;
}
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}
main();
