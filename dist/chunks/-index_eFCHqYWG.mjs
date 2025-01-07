import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Sky High Hypoglycemia","meta_title":" ","description":"A collaborative escape room designed as part of Stanford's 'DESIGN 1' course.","images":{"splash":"/images/Sky High Hypoglycemia Splash.png","ss1":"/images/Escape Room Spread.png"},"details":{"date":"Spring 2024","type":"Class Project","location":"Stanford, CA","role":"Designer"},"content":"Sky High Hypoglycemia was a collaborative project in Stanford's DESIGN 1 Course. <br> See the final report below:"};
				const file = "/Users/guck/matthewjguck.github.io/src/content/skyhigh/-index.md";
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
