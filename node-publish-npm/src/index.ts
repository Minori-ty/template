import { parse } from "node-html-parser";
import { format } from "prettier";
import type { Plugin } from "vite";
import defaultIngore from "./defaultIgnore";

export default function (options?: {
	repeat?: number;
	ignore?: string[];
	dnsPrefetch?: string[];
	preconnect?: string[];
}): Plugin {
	const {
		repeat = 1,
		ignore = [],
		dnsPrefetch = [],
		preconnect = [],
	} = options ?? {};

	const domains: TypeDomain = [];

	return {
		name: "vite-plugin-dns",
		apply: "build",
		transform(code: string) {
			const matchs = code.match(
				/https?:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(:[0-9]{1,5})?(\/[^\s]*)?/g,
			);

			if (matchs?.length) {
				for (const item of matchs) {
					const obj = new URL(item);
					const domain = `${obj.protocol}//${obj.host}`;

					if (defaultIngore.includes(domain)) {
						continue;
					}

					if (ignore.includes(domain)) {
						continue;
					}

					const index = domains.findIndex((item) => item.url === domain);
					if (index === -1) {
						domains.push({ url: domain, repeat: 1 });
					} else {
						domains[index].repeat++;
					}
				}
			}
		},
		transformIndexHtml(html: string) {
			const inset: TypeDomain = [];
			const length = domains.length;
			for (let i = 0; i < length; i++) {
				if (domains[i].repeat >= repeat) {
					inset.push(domains[i]);
				}
			}

			for (const url of dnsPrefetch) {
				const index = inset.findIndex((item) => item.url === url);
				if (index === -1) {
					inset.push({ url, repeat: 1 });
				} else {
					inset[index].repeat++;
				}
			}
			const root = parse(html);
			const head = root.querySelector("head");
			for (const item of inset) {
				const link = `<link rel="dns-prefetch" href="${item.url}"/>`;
				head?.insertAdjacentHTML("afterbegin", link);
			}
			for (const domain of preconnect) {
				const link = `<link rel="preconnect" href="${domain}"/>`;
				head?.insertAdjacentHTML("afterbegin", link);
			}

			return format(root.toString(), { parser: "html" });
		},
	};
}

type TypeDomain = { url: string; repeat: number }[];
