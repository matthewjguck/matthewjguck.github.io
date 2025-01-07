import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"EnGauge","meta_title":"","description":"An Event Planning and Notification platform for Stanford students.","images":{"splash":"/images/EnGauge Splash.png","spread":"/images/Spread Test.png","ss1":"/images/Final1.png","ss2":"/images/Final2.png","ss3":"/images/Final3.png","ss4":"/images/Final4.png","ss5":"/images/Final5.png","ss6":"/images/Final6.png","ss7":"/images/Final7.png"},"details":{"date":"Spring 2024","type":"Mobile App","location":"Stanford, CA","role":"Designer"},"files":{"proposal":"/files/CS278Proposal","milestone":"/files/CS 278 Milestone.pdf","final":"/files/CS 278 Final Project.pdf"},"content":" EnGauge was deisgned to be used by Voluntary Student Organizations (VSOs), dorms, and social groups on Stanford’s campus. On a high level, EnGauge is a platform that allows groups to: <br> <br>\n• Provide event details and timely reminders to group members, <br> • Gauge member interest via a “Petition” feature for potential events. <br> <br>\nEnGauge was my final project for Stanford's CS 278 - Social Computing. View the final report below. "};
				const file = "/Users/guck/matthewjguck.github.io/src/content/engauge/-index.md";
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
