import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Normalizing Sustainable Behaviors","meta_title":"","description":"Proposals for normalizing sutainable behaviors on Stanford's campus.","images":{"splash":"/images/Norm Splash.png","ss1":"images/Norm1.png","ss2":"images/Norm2.png","ss3":"images/Norm3.png","ss4":"images/Norm4.png"},"details":{"date":"Spring 2024","type":"Design Proposals","location":"Stanford, CA","role":"Designer, Researcher"},"content":" "};
				const file = "/Users/guck/matthewjguck.github.io/src/content/normalizingsustainability/-index.md";
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
