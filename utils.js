// @ts-check
/**
 * 
 * @param {import('vite').ViteDevServer} server 
 * @returns 
 */
export function getHttpServerAddress(server) {
  if (!server.httpServer) {
    console.error("No httpServer found!");
    process.exit(1);
  }

  const httpSeverAddress = server.httpServer.address();

  if (!httpSeverAddress) {
    console.error("No httpServerAddress found!");
    process.exit(1);
  }

  const address =
    typeof httpSeverAddress === "string"
      ? httpSeverAddress
      : httpSeverAddress.family === "IPv6"
      ? `http://[${httpSeverAddress.address}]:${httpSeverAddress.port}`
      : `http://${httpSeverAddress.address}:${httpSeverAddress.port}`;
  return address;
}
