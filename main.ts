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
import * as flags from "https://deno.land/std/flags/mod.ts";

const env = config();

const { args } = Deno;

const argPort = flags.parse(args).PORT;

const port = Number(env.PORT) || Number(argPort) || 8000;

await start(manifest, { plugins: [twindPlugin(twindConfig)], port: port });
