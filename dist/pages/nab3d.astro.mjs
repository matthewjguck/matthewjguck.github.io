/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_wW0F8rhI.mjs';
import { g as getEntry } from '../chunks/_astro_content_Bj3I4JW5.mjs';
export { renderers } from '../renderers.mjs';

const $$Nab3D = createComponent(async ($$result, $$props, $$slots) => {
  const nab3d = await getEntry("nab3d", "-index");
  const { title, description, meta_title, images, details, files, content } = nab3d.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": images.splash }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm"> <div class="container"> <div class="row mb-8"> <div class="col-5"> <h2 class="title mb-5">${title}</h2> <h5 class="text-h6 lg:text-h5 mb-5">${description}</h5> <div class="date mb-3"> <h4>Date</h4> ${details.date} </div> <div class="type mb-3"> <h4>Project Type</h4> ${details.type} </div> <div class="location mb-3"> <h4>Location</h4> ${details.location} </div> <div class="role mb-3"> <h4>Role</h4> ${details.role} </div> </div> <div class="col-7"> <img${addAttribute(images.splash, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", height: "auto" }, "style")}> </div> </div> <div class="row mb-8"> <div class="col-5"> <h4 class="mb-4">Links</h4> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <div class="social-icons"> <a href="https://github.com/soapantelope/nab" title="github"> <i class="fa fa-github" aria-hidden="true"></i> </a> <a href="https://devpost.com/software/nab-3d" title="devpost"> <i class="fa fa-link" aria-hidden="true"></i> </a> </div> </div> <div class="col-12"> <div class="mt-8 mb-8 flex flex-col justify-center items-center" style="background-color: #2c2c2ce1; border-radius: 16px;"> <h5 class="text-h6 lg:text-h5 m-5">${unescapeHTML(markdownify(content))}</h5> </div> <ul style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"> <iframe src="https://www.youtube.com/embed/-RIqBdwPtAk" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </ul> </div> </div> </div> </section> ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/nab3d.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/nab3d.astro";
const $$url = "/nab3d";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nab3D,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
