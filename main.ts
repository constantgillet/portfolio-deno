/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const env = config();

const port = Number(env.PORT) || 8000;

await start(manifest, { plugins: [twindPlugin(twindConfig)], port: port });
