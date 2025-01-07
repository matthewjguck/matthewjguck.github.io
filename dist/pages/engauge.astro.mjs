/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$Base } from '../chunks/Base_wW0F8rhI.mjs';
import { g as getEntry } from '../chunks/_astro_content_Bj3I4JW5.mjs';
export { renderers } from '../renderers.mjs';

const $$Engauge = createComponent(async ($$result, $$props, $$slots) => {
  const engauge = await getEntry("engauge", "-index");
  const { title, description, meta_title, images, details, files, content } = engauge.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm"> <div class="container"> <div class="row mb-8"> <div class="col-5"> <h2 class="title mb-5">${title}</h2> <h5 class="text-h6 lg:text-h5 mb-5">${description}</h5> <div class="date mb-3"> <h4>Date</h4> ${details.date} </div> <div class="type mb-3"> <h4>Project Type</h4> ${details.type} </div> <div class="location mb-3"> <h4>Location</h4> ${details.location} </div> <div class="role mb-3"> <h4>Role</h4> ${details.role} </div> </div> <div class="col-7"> <img${addAttribute(images.splash, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")}> </div> </div> <div class="row mb-8"> <div class="col-12"> <h5 class="text-h6 lg:text-h5 mb-5">${unescapeHTML(markdownify(content))}</h5> </div> <div class="row mb-8"></div> <img${addAttribute(images.spread, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")}> <div class="flex mb-8 justify-center"> <!-- Image Block 1 --> <div class="col-8"> <img${addAttribute(images.ss1, "src")} class="mb-4"> <img${addAttribute(images.ss2, "src")} class="mb-4"> <img${addAttribute(images.ss3, "src")} class="mb-4"> <img${addAttribute(images.ss4, "src")} class="mb-4"> <img${addAttribute(images.ss5, "src")} class="mb-4"> <img${addAttribute(images.ss6, "src")} class="mb-4"> <img${addAttribute(images.ss7, "src")} class="mb-4"> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/engauge.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/engauge.astro";
const $$url = "/engauge";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Engauge,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
