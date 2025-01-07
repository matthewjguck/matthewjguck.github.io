/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_wW0F8rhI.mjs';
import { g as getEntry } from '../chunks/_astro_content_Bj3I4JW5.mjs';
export { renderers } from '../renderers.mjs';

const $$Thecupidproject = createComponent(async ($$result, $$props, $$slots) => {
  const thecupidproject = await getEntry("thecupidproject", "-index");
  const { title, description, meta_title, images, details, files, content } = thecupidproject.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": images.splash }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm"> <div class="container"> <div class="row mb-8"> <div class="col-5"> <h2 class="title mb-5">${title}</h2> <h5 class="text-h6 lg:text-h5 mb-5">${description}</h5> <div class="date mb-3"> <h4>Date</h4> ${details.date} </div> <div class="type mb-3"> <h4>Project Type</h4> ${details.type} </div> <div class="location mb-3"> <h4>Location</h4> ${details.location} </div> <div class="role mb-3"> <h4>Role</h4> ${details.role} </div> </div> <div class="col-7"> <img${addAttribute(images.splash, "src")}${addAttribute(title, "alt")} style="width: 100%; height: auto;"> </div> </div> <challenge class="m-16"> <h3 class="flex justify-center">Challenge</h3> <div class="m-5 flex flex-col justify-center items-center" style="background-color: #2c2c2ce1; border-radius: 16px;"> <h4 class="mt-10 text-white">${unescapeHTML(markdownify(content.challenge))}</h4> <img src="public/images/Challenges Diabetes.png" class="w-9/12" alt="Challenge Image"> </div> </challenge> <action class="m-16"> <h3 class="flex justify-center">Challenge</h3> <div class="m-5 flex flex-col justify-center items-center" style="background-color: #2c2c2ce1; border-radius: 16px;"> <h4 class="mt-10 text-white">${unescapeHTML(markdownify(content.challenge))}</h4> <img src="public/images/Challenges Diabetes.png" class="w-9/12" alt="Challenge Image"> </div> </action> </div> </section> ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/thecupidproject.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/thecupidproject.astro";
const $$url = "/thecupidproject";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thecupidproject,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
