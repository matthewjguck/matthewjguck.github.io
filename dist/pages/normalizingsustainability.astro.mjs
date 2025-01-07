/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$Base } from '../chunks/Base_wW0F8rhI.mjs';
import { g as getEntry } from '../chunks/_astro_content_Bj3I4JW5.mjs';
/* empty css                                                     */
export { renderers } from '../renderers.mjs';

const $$Normalizingsustainability = createComponent(async ($$result, $$props, $$slots) => {
  const normalizingsustainability = await getEntry("normalizingsustainability", "-index");
  const { title, description, meta_title, images, details, content } = normalizingsustainability.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "data-astro-cid-lre7ib6p": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm" data-astro-cid-lre7ib6p> <div class="container" data-astro-cid-lre7ib6p> <div class="row mb-8" data-astro-cid-lre7ib6p> <div class="col-5" data-astro-cid-lre7ib6p> <h2 class="title mb-5" data-astro-cid-lre7ib6p>${title}</h2> <h5 class="text-h6 lg:text-h5 mb-5" data-astro-cid-lre7ib6p>${description}</h5> <div class="date mb-3" data-astro-cid-lre7ib6p> <h4 data-astro-cid-lre7ib6p>Date</h4> ${details.date} </div> <div class="type mb-3" data-astro-cid-lre7ib6p> <h4 data-astro-cid-lre7ib6p>Project Type</h4> ${details.type} </div> <div class="location mb-3" data-astro-cid-lre7ib6p> <h4 data-astro-cid-lre7ib6p>Location</h4> ${details.location} </div> <div class="role mb-3" data-astro-cid-lre7ib6p> <h4 data-astro-cid-lre7ib6p>Role</h4> ${details.role} </div> </div> <div class="col-7" data-astro-cid-lre7ib6p> <img${addAttribute(images.splash, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")} data-astro-cid-lre7ib6p> </div> </div> <div class="row mb-8" data-astro-cid-lre7ib6p> <div class="col-12" data-astro-cid-lre7ib6p> <h5 class="text-h6 lg:text-h5 mb-5" data-astro-cid-lre7ib6p>${unescapeHTML(markdownify(content))}</h5> </div> <div class="mb-12" data-astro-cid-lre7ib6p> <div class="gallery-scroll flex overflow-x-auto space-x-4 mb-16" data-astro-cid-lre7ib6p> <div class="flex-shrink-0 w-2/3 lg:w-1/3" data-astro-cid-lre7ib6p> <a href="/images/Norm1.png" target="_blank" data-astro-cid-lre7ib6p> <img src="/images/Norm1.png" alt="Norm 1" data-astro-cid-lre7ib6p> </a> </div> <div class="flex-shrink-0 w-2/3 lg:w-1/3" data-astro-cid-lre7ib6p> <a href="/images/Norm2.png" target="_blank" data-astro-cid-lre7ib6p> <img src="/images/Norm2.png" alt="Norm 2" data-astro-cid-lre7ib6p> </a> </div> <div class="flex-shrink-0 w-2/3 lg:w-1/3" data-astro-cid-lre7ib6p> <a href="/images/Norm3.png" target="_blank" data-astro-cid-lre7ib6p> <img src="/images/Norm3.png" alt="Norm 3" data-astro-cid-lre7ib6p> </a> </div> <div class="flex-shrink-0 w-2/3 lg:w-1/3" data-astro-cid-lre7ib6p> <a href="/images/Norm4.png" target="_blank" data-astro-cid-lre7ib6p> <img src="/images/Norm4.png" alt="Norm 4" data-astro-cid-lre7ib6p> </a> </div> </div> </div> </div> </div> </section>  ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/normalizingsustainability.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/normalizingsustainability.astro";
const $$url = "/normalizingsustainability";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Normalizingsustainability,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
