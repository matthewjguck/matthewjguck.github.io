import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Diabetic Daycare","meta_title":"","description":"A Java-based Type 1 Diabetes simulator to help non-diabetics better understand blood sugar management.","images":{"splash":"/images/FINAL GAME.png","ss1":"/images/Bell Curve.png"},"details":{"date":"Summer 2024","type":"Java Game","location":"San Francisco, CA","role":"Programming (Java), Prototyping, System & UI Design, UX Research"},"content":{"challenge":"Friends and family of diabetics often do not understand the basics of diabetes management.","action":"I developed Diabetic Daycare, a Java-based educational Type 1 Diabetes simulator. The game utilizes a proprietary algorithmic model of insulin and blood glucose interactions to accurately simulate the experience of living with Type 1.","future":"Moving forward with this project, I plan to reach out to pediatric endocrinology clinics with diabetes education training.","curvetitle":"Designing the Model","curve":"This model leverages Gaussian distributions to simulate the absorption rates of both insulin and carbohydrates.  <br><br> \nCarbohydrate absorption is variable, peaking between 30 to 120 minutes based on the glycemic index and complexity of the food. Simple carbohydrates are absorbed rapidly, while complex carbohydrates exhibit delayed peaks. Insulin absorption, by contrast, is more consistent, reaching its peak effectiveness at approximately 120 minutes post-injection.  <br><br>"}};
				const file = "/Users/guck/matthewjguck.github.io/src/content/daycare/-index.md";
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
