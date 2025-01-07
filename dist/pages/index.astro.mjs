/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$Base } from '../chunks/Base_wW0F8rhI.mjs';
import { g as getEntry } from '../chunks/_astro_content_Bj3I4JW5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await getEntry("homepage", "-index");
  const { banner, features } = homepage.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="section pt-14"> <div class="background-image-wrapper"> <img${addAttribute(banner.wave, "src")} alt="Background Image" class="w-full h-auto lg:block hidden"> <img${addAttribute(banner.wave, "src")} alt="Background Image" class="w-full object-cover lg:hidden" style="height: 75vh;"> </div> <div class="container"> <div class="row flex flex-col-reverse md:flex-row"> <!-- Text Block --> <div class="text-left mb-8 col-7"> <div class="text-center md:text-center lg:text-left"> <h3 class="mb-1 font-primary">${unescapeHTML(markdownify(banner.hook))}</h3> <div class="flex justify-center flex-row lg:w-full md:justify-center lg:flex-col lg:items-left lg:justify-start"> <h1 class="h2 mr-4 lg:text-h1 mb-1">${unescapeHTML(markdownify(banner.first))}</h1> <h1 class="h2 lg:text-h1 mb-1">${unescapeHTML(markdownify(banner.last))}</h1> </div> <h5 class="text-h6 lg:text-h5 mb-16">${unescapeHTML(markdownify(banner.content))}</h5> </div> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <div class="mt-8"> <div class="social-icons justify-center md:justify-center lg:justify-start lg:align-left"> <a href="https://www.instagram.com/guck.__/" title="instagram"> <i class="fa fa-instagram" aria-hidden="true"></i> </a> <a href="https://www.linkedin.com/in/matthewguck/" title="linkedin"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> </a> <a href="https://github.com/matthewjguck" title="github"> <i class="fa fa-github" aria-hidden="true"></i> </a> </div> </div> </div> <!-- Image Block --> <div class="col-5"> <div class="flex justify-center md:justify-center lg:justify-start"> <img${addAttribute(banner.image, "src")} alt="Project Spread" class="w-10/12 lg:w-full h-auto"> </div> </div> </div> </div> </section>   <div class="container"> <h3 class="mb-4">My Projects</h3> </div> ${features.map((feature, index) => renderTemplate`<section${addAttribute(`section-sm ${index % 2 === 0 && "bg-gradient"}`, "class")} data-scroll-animate="fadeInUp"> <div class="container"> <div class="row items-center justify-between"> <div${addAttribute(`mb:md-0 mb-6 md:col-7 ${index % 2 !== 0 && "md:order-2"}`, "class")}> <a${addAttribute(feature.button.link, "href")} class="block"> <div class="feature-image-wrapper"> <img${addAttribute(feature.image, "src")} alt="Feature Image" class="feature-image"> </div> </a> </div> <div${addAttribute(`md:col-7 lg:col-5 ${index % 2 !== 0 && "md:order-1"}`, "class")}> <h2 class="mb-4">${unescapeHTML(markdownify(feature.title))}</h2> <h4 class="mb-8 text-lg">${unescapeHTML(markdownify(feature.content))}</h4> <!-- Skills Section --> ${feature.skills && renderTemplate`<div class="flex flex-wrap gap-2 mt-4"> ${feature.skills.split(",").map((skill, idx) => renderTemplate`<span class="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium"> ${skill.trim()} </span>`)} </div>`} ${feature.button.enable && renderTemplate`<a class="btn btn-primary mt-5"${addAttribute(feature.button.link, "href")}> ${feature.button.label} </a>`} </div> </div> </div> </section>`)} ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
