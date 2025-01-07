import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"enable":true,"title":"What Users Are Saying About Astroplate","description":"Don't just take our word for it - hear from some of our satisfied users!  Check out some of our testimonials below to see what others are saying about Astroplate.","testimonials":[{"name":"Marvin McKinney","designation":"Web Designer","avatar":"/images/avatar-sm.png","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto illo molestias, assumenda expedita commodi inventore non itaque molestiae voluptatum dolore, facilis sapiente, repellat veniam."},{"name":"Marvin McKinney","designation":"Web Designer","avatar":"/images/avatar-sm.png","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto illo molestias, assumenda expedita commodi inventore non itaque molestiae voluptatum dolore, facilis sapiente, repellat veniam."},{"name":"Marvin McKinney","designation":"Web Designer","avatar":"/images/avatar-sm.png","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto illo molestias, assumenda expedita commodi inventore non itaque molestiae voluptatum dolore, facilis sapiente, repellat veniam."},{"name":"Marvin McKinney","designation":"Web Designer","avatar":"/images/avatar-sm.png","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto illo molestias, assumenda expedita commodi inventore non itaque molestiae voluptatum dolore, facilis sapiente, repellat veniam."}]};
				const file = "/Users/guck/matthewjguck.github.io/src/content/sections/testimonial.md";
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
