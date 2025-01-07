/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as createAstro, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, a as renderComponent } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { h as humanize, $ as $$Base } from '../chunks/Base_wW0F8rhI.mjs';
import 'clsx';
import { a as getCollection } from '../chunks/_astro_content_Bj3I4JW5.mjs';
export { renderers } from '../renderers.mjs';

const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/guck/matthewjguck.github.io/src/lib/contentParser.astro", void 0);

const $$Astro$2 = createAstro("https://matthewjguck.github.io/");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { className } = Astro2.props;
  const paths = Astro2.url.pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: "Home",
      href: "/",
      "aria-label": Astro2.url.pathname === "/" ? "page" : void 0
    }
  ];
  paths.forEach((label, i) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" && parts.push({
      label: humanize(label.replace(".html", "").replace(/[-_]/g, " ")) || "",
      href,
      "aria-label": Astro2.url.pathname === href ? "page" : void 0
    });
  });
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(className, "class")}> <ol class="inline-flex" role="list"> ${parts.map(({ label, ...attrs }, index) => renderTemplate`<li class="mx-1 capitalize" role="listitem"> ${index > 0 && renderTemplate`<span class="inlin-block mr-1">/</span>`} ${index !== parts.length - 1 ? renderTemplate`<a class="text-primary dark:text-darkmode-primary"${spreadAttributes(attrs)}> ${label} </a>` : renderTemplate`<span class="text-light dark:text-darkmode-light">${label}</span>`} </li>`)} </ol> </nav>`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/components/Breadcrumbs.astro", void 0);

const $$Astro$1 = createAstro("https://matthewjguck.github.io/");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="container text-left font-secondary"> <div class="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light"> <h1>${humanize(title)}</h1> ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "className": "mt-6" })} </div> </div> </section>`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/partials/PageHeader.astro", void 0);

const $$Astro = createAstro("https://matthewjguck.github.io/");
async function getStaticPaths() {
  const COLLECTION_FOLDER = "pages";
  const pages = await getSinglePage(COLLECTION_FOLDER);
  const paths = pages.map((page) => ({
    params: {
      regular: page.slug
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  const { Content } = await page.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })} ${maybeRenderHead()}<section class="section-sm"> <div class="container"> <div class="row justify-center"> <div class="lg:col-10"> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/[regular].astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/[regular].astro";
const $$url = "/[regular]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
