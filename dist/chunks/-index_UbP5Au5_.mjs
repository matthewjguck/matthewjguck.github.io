import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"The Cupid Project","meta_title":"","description":"An annual card-giving project delivering to nursing homes every Valentine's Day since 2018.","images":{"splash":"/images/Cupid Project Splash.png","family":"/images/family.webp"},"files":{"pdf":"/files/Cupid Project Cards.pdf"},"details":{"date":"February 2018 - Present","type":"Community Outreach","location":"Longview, TX","role":"Founder, Lead Designer"},"content":" <h3 class=mb-5> The Cupid Project's Story </h3> The Cupid Project was born out of a deep-rooted passion for helping others and making a difference. It all started with my family's shared desire to spread love and joy to those in need. The journey began with the establishment of the Hearts Club at Longview High School in Longview, Texas, where monthly art projects were organized to connect with and bring happiness to individuals in nursing homes.  \n<br>\nAs time went on, the scope of our efforts expanded, and we realized the power of greeting cards as a means of reaching out to even more people. With an unwavering commitment to combatting loneliness and fostering community connections, The Cupid Project was established in 2018. Since then, our annual card-giving project has become a beacon of love, inspiring individuals and communities worldwide. "};
				const file = "/Users/guck/matthewjguck.github.io/src/content/thecupidproject/-index.md";
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
