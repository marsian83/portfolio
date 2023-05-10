export default function jsonHMR() {
  return {
    name: "custom-hmr",
    enforce: "post",
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".json")) {
        console.log("reloading json file...");

        server.ws.send({
          type: "full-reload",
          path: "*",
        });
      }
    },
  };
}
