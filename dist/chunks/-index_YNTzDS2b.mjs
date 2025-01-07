import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"banner":{"hook":"👋 Hi, I'm","first":"Matthew","last":"","content":"I'm a Junior studying Computer Science and Design at Stanford University. 🌲 I am the Stanford Class of 2026 President, and I love to create things— software, visuals, games, music, etc.","image":"/images/Matthew Blob.png","wave":"/images/Waves banner.png","button":{"enable":true,"label":"view my work","link":""}}};
				const file = "/Users/guck/matthewjguck.github.io/src/content/gallery/-index.md";
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
