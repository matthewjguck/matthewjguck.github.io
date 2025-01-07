import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"On Type 1","meta_title":" ","description":"On Type 1 is a series of digital prints that aims to capture various facets of the diabetic experience.","images":{"splash":"/images/On Type 1 Splash.png","ss1":"/images/T1D.png","ss2":"/images/LO.png","ss3":"/images/Life Juice.png"},"details":{"date":"Summer 2023","type":"Personal Project","location":"San Francisco, CA","role":"Designer"},"content":""};
				const file = "/Users/guck/matthewjguck.github.io/src/content/ontype1/-index.md";
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
