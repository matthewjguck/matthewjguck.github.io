/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_wW0F8rhI.mjs';
import { g as getEntry } from '../chunks/_astro_content_Bj3I4JW5.mjs';
export { renderers } from '../renderers.mjs';

const $$Slatt = createComponent(async ($$result, $$props, $$slots) => {
  const slatt = await getEntry("slatt", "-index");
  const { title, description, meta_title, images, details, files, content } = slatt.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": images.splash }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm"> <div class="container"> <div class="row mb-8"> <div class="col-5"> <h2 class="title mb-5">${title}</h2> <h5 class="text-h6 lg:text-h5 mb-5">${description}</h5> <div class="date mb-3"> <h4>Date</h4> ${details.date} </div> <div class="type mb-3"> <h4>Project Type</h4> ${details.type} </div> <div class="location mb-3"> <h4>Location</h4> ${details.location} </div> <div class="role mb-3"> <h4>Role</h4> ${details.role} </div> </div> <div class="col-7"> <img${addAttribute(images.splash, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")}> </div> </div> <div class="row mb-8"> <div class="col-5"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <div class="social-icons mb-8"> <a href="https://github.com/matthewjguck/slatt" title="github"> <i class="fa fa-github" aria-hidden="true"></i> </a> </div> <h6 class="text-h6 lg:text-h5 mb-1">${unescapeHTML(markdownify(content))}</h6> </div> <div class="col-7"> <img${addAttribute(images.ss1, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")} class="mb-8"> <img${addAttribute(images.ss2, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")} class="mb-8"> <img${addAttribute(images.ss3, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")} class="mb-8"> </div> </div> </div> </section> ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/slatt.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/slatt.astro";
const $$url = "/slatt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Slatt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
