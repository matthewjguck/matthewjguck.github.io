/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_wW0F8rhI.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm text-center"> <div class="container"> <div class="row justify-center"> <div class="sm:col-10 md:col-8 lg:col-6"> <span class="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
404
</span> <h1 class="h2 mb-4">Page not found</h1> <div class="content"> <p>
The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
</p> </div> <a href="/" class="btn btn-primary mt-8">Back to home</a> </div> </div> </div> </section> ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/404.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
