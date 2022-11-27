import os from "os";
import path from "path";
import chalk from "chalk";
import fs from "fs";
const exampleConfig = {
	"telegram": {
		"bot": null,
		"user": null
	},
	"mangadex": {
		"username": null,
		"password": null
	},
	"discord_webhook": null,
	"max_reading_to_show_popular": 10,
	"port": 8080
};
interface SecretConfig {
	telegram?: {
		bot: string | null;
		user: string | null;
	};
	mangadex?: {
		username: string | null;
		password: string | null;
	};
	discord_webhook: string | null;
	max_reading_to_show_popular: number | null;
	port?: number | null;
}

let secretConfig: SecretConfig | null;

secretConfig = exampleConfig;
export default secretConfig || null;
