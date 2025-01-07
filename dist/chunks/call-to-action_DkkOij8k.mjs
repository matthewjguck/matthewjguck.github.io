import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"enable":true,"title":"Ready to build your next project with Astro?","image":"/images/call-to-action.png","description":"Experience the future of web development with Astroplate and Astro. Build lightning-fast static sites with ease and flexibility.","button":{"enable":true,"label":"Get Started Now","link":"https://github.com/zeon-studio/astroplate"}};
				const file = "/Users/guck/matthewjguck.github.io/src/content/sections/call-to-action.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
