import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Nab 3D","meta_title":" ","description":"A way to 'nab' any object straight out of the real world and into your website, with just a short video and a single line of code.","images":{"splash":"/images/Nab 3D Splash.png"},"details":{"date":"Spring 2024","type":"Hackathon Entry","location":"Stanford, CA","role":"Designer, Presenter"},"content":" Nab 3D is a photogrammetry tool that allows web developers to create 3D models of any real world object and add them to their websites using a short video scan and a single line of HTML. <br> \n<br> • Awarded ‘Best Beginner Hack’ at TreeHacks 2024, the largest collegiate hackathon in the United States. <br>  <br> • Built using React, JavaScript, Vite, Bun, and Swift.<br>  <br> \nWatch the video below to learn more! "};
				const file = "/Users/guck/matthewjguck.github.io/src/content/nab3d/-index.md";
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
