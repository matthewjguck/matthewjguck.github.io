import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"SLATT","meta_title":" ","description":"Spotify Language Acquisition Translation Tool - your ultimate companion for exploring music lyrics in multiple languages while enjoying your favorite tracks on Spotify. SLATT connects directly to your Spotify account and translates the current song into your desired target language","images":{"splash":"/images/SLATT Splash.png","ss1":"/images/slatt1.png","ss2":"/images/slatt2.png","ss3":"/images/slatt3.png"},"details":{"date":"Winter 2023","type":"Personal Project","location":"San Francisco, CA","role":"Developer"},"content":" Made using Python and HTML <br> <br>\nSLATT utilizes Spotify's WebAPI, Genius' Lyricsgenius API, and LibreTranslate's API <br> <br>\nAs someone with a rich musical background and as a student currently studying Spanish, I often find myself listening to songs in different languages. (Sometimes as a means to improve my aural skills, though often it's just for the pleasure of listening!) Reading song lyrics alongside their translation into my native language has been an effective method for bolstering my vocabulary in other languages. SLATT streamlines this process— gone are the days of manually searching for and translating song lyrics. SLATT connects directly to your Spotify account and translates the current song into your target language!"};
				const file = "/Users/guck/matthewjguck.github.io/src/content/slatt/-index.md";
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
