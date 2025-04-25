import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "MyDemo", // name of the server
  description: "My Demo description", // description of the server
  version: "1.0.0",
});

server.tool(
  "simple-name", // name of the tool
  "description of simple-name", // description of the tool
  {
    name: z.string().describe("personal name"),
  },
  async ({ name }) => {
    return {
      content: [{ type: "text", text: `Hello ${name} ` }],
    };
  }
);


// Listening client
const transport=new StdioServerTransport() // Only local
await server.connect(transport)
