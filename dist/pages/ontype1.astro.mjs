/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_wW0F8rhI.mjs';
import { g as getEntry } from '../chunks/_astro_content_EbfCbQ-i.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Ontype1 = createComponent(async ($$result, $$props, $$slots) => {
  const ontype1 = await getEntry("ontype1", "-index");
  const { title, description, meta_title, images, details, files, content } = ontype1.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": images.splash, "data-astro-cid-uo3quwge": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm" data-astro-cid-uo3quwge> <div class="container" data-astro-cid-uo3quwge> <div class="row mb-8" data-astro-cid-uo3quwge> <div class="col-5" data-astro-cid-uo3quwge> <h2 class="title mb-5" data-astro-cid-uo3quwge>${title}</h2> <h5 class="text-h6 lg:text-h5 mb-5" data-astro-cid-uo3quwge>${description}</h5> <div class="date mb-3" data-astro-cid-uo3quwge> <h4 data-astro-cid-uo3quwge>Date</h4> ${details.date} </div> <div class="type mb-3" data-astro-cid-uo3quwge> <h4 data-astro-cid-uo3quwge>Project Type</h4> ${details.type} </div> <div class="location mb-3" data-astro-cid-uo3quwge> <h4 data-astro-cid-uo3quwge>Location</h4> ${details.location} </div> <div class="role mb-3" data-astro-cid-uo3quwge> <h4 data-astro-cid-uo3quwge>Role</h4> ${details.role} </div> </div> <div class="col-7" data-astro-cid-uo3quwge> <img${addAttribute(images.splash, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")} data-astro-cid-uo3quwge> </div> </div> <div class="row mb-8" data-astro-cid-uo3quwge> <div class="col-5" data-astro-cid-uo3quwge> <h6 class="text-h6 lg:text-h5 mb-1" data-astro-cid-uo3quwge>${unescapeHTML(markdownify(content))}</h6> </div> <div class="flex flex-wrap mb-8" data-astro-cid-uo3quwge> <!-- Image Block 1 --> <div class="w-full lg:w-1/3 p-2" data-astro-cid-uo3quwge> <img${addAttribute(images.ss1, "src")}${addAttribute(title, "alt")} class="zoomable-img w-full h-auto mb-4" data-astro-cid-uo3quwge> </div> <div class="w-full lg:w-1/3 p-2" data-astro-cid-uo3quwge> <img${addAttribute(images.ss2, "src")}${addAttribute(title, "alt")} class="zoomable-img w-full h-auto mb-4" data-astro-cid-uo3quwge> </div> <div class="w-full lg:w-1/3 p-2" data-astro-cid-uo3quwge> <img${addAttribute(images.ss3, "src")}${addAttribute(title, "alt")} class="zoomable-img w-full h-auto mb-4" data-astro-cid-uo3quwge> </div> </div>  </div> <!-- Modal Structure --> <div id="myModal" class="fixed inset-0 hidden items-center justify-center bg-black bg-opacity-75 z-50" onclick="closeModal()" data-astro-cid-uo3quwge> <img id="modalImage" class="max-w-full max-h-full" data-astro-cid-uo3quwge> </div> </div> </section> ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/ontype1.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/ontype1.astro";
const $$url = "/ontype1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ontype1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
