// @ts-check
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { getHttpServerAddress } from "./utils.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const server = await createServer({
  configFile: false,
  root: __dirname,
  plugins: [
    {
      name: "example-framework-plugin",

      async configureServer(server) {
        return async () => {
          server.middlewares.use(async (req, res) => {
            const { id } =
              (await server.pluginContainer.resolveId(
                "react-router-dom",
                "",
                {
                  ssr: true,
                  // https://github.com/vitejs/vite/blob/v5.2.11/packages/vite/src/node/plugins/resolve.ts#L179-L181
                  custom: { "node-resolve": { isRequire: true } },
                }
              )) ?? {};
            res.end(`'react-router-dom' resolves to ${id}`);
          });
        };
      },
    },
  ],
});
await server.listen();

const address = getHttpServerAddress(server);

const resp = await fetch(address);
const txt = await resp.text();
await server.close();

console.log(`\n${txt}\n`);

