import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, b as addAttribute, s as spreadAttributes, a as renderComponent, F as Fragment, h as renderHead, i as renderSlot } from './astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import 'clsx';
import 'github-slugger';
import { marked } from 'marked';
import '@astrojs/internal-helpers/path';
import { A as AstroError, F as FailedToFetchRemoteImageDimensions, i as imageMetadata, f as NoImageMetadata, E as ExpectedImageOptions, g as ExpectedImage, h as ExpectedNotESMImage, r as resolveSrc, j as isRemoteImage, k as isESMImportedImage, l as isLocalService, D as DEFAULT_HASH_PROPS, m as InvalidImageService, n as ImageMissingAlt } from './astro/assets-service_CoN23ciC.mjs';
import * as mime from 'mrmime';
import { IoSearch } from 'react-icons/io5';
/* empty css                             */
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$TwSizeIndicator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${process.env.NODE_ENV === "development" && renderTemplate`${maybeRenderHead()}<div class="fixed left-0 top-0 z-50 flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200"><span class="block sm:hidden">all</span><span class="hidden sm:block md:hidden">sm</span><span class="hidden md:block lg:hidden">md</span><span class="hidden lg:block xl:hidden">lg</span><span class="hidden xl:block 2xl:hidden">xl</span><span class="hidden 2xl:block">2xl</span></div>`}`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/components/TwSizeIndicator.astro", void 0);

const site = {
	title: "Matthew Guck",
	base_url: "https://matthewjguck.github.io/",
	base_path: "/",
	trailing_slash: false,
	favicon: "/images/Favicon.png",
	logo: "/images/LogoLight.png",
	logo_darkmode: "/images/LogoDark.png",
	logo_width: "100",
	logo_height: "78.78",
	logo_text: "Matthew Guck"
};
const settings = {
	search: false,
	sticky_header: true,
	theme_switcher: true,
	default_theme: "system",
	pagination: 2,
	summary_length: 200,
	blog_folder: "blog"
};
const params = {
	contact_form_action: "#",
	copyright: "Designed And Developed by [Zeon Studio](https://zeon.studio)"
};
const navigation_button = {
	enable: false,
	label: "Get Started",
	link: ""
};
const disqus = {
	enable: true,
	shortname: "themefisher-template",
	settings: {
	}
};
const metadata = {
	meta_author: "zeon.studio",
	meta_image: "/images/og-image.png",
	meta_description: "astro and tailwind boilerplate"
};
const config = {
	site: site,
	settings: settings,
	params: params,
	navigation_button: navigation_button,
	disqus: disqus,
	metadata: metadata
};

const markdownify = (content, div) => {
  return div ? marked.parse(content) : marked.parseInline(content);
};
const humanize = (content) => {
  return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/[-\s]+/g, " ").replace(/^[a-z]/, function(m) {
    return m.toUpperCase();
  });
};
const titleify = (content) => {
  const humanized = humanize(content);
  return humanized.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};
const plainify = (content) => {
  const parseMarkdown = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};
const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'"
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_CoN23ciC.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$7 = createAstro("https://matthewjguck.github.io/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/guck/matthewjguck.github.io/node_modules/astro/components/Image.astro", void 0);

const $$Astro$6 = createAstro("https://matthewjguck.github.io/");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/guck/matthewjguck.github.io/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$5 = createAstro("https://matthewjguck.github.io/");
const $$ImageMod = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ImageMod;
  let {
    src,
    alt,
    width,
    height,
    loading,
    decoding,
    class: className,
    format,
    style
  } = Astro2.props;
  src = `/public${src}`;
  const images = /* #__PURE__ */ Object.assign({"/public/images/Autumn.png": () => import('./Autumn_C-mADCrV.mjs'),"/public/images/Bathrooms.png": () => import('./Bathrooms_9BlNSCJM.mjs'),"/public/images/Bell Curve.png": () => import('./Bell Curve_BULWmQiH.mjs'),"/public/images/Canes.png": () => import('./Canes_DTWka5QH.mjs'),"/public/images/Challenges Diabetes.png": () => import('./Challenges Diabetes_DgwvF6HT.mjs'),"/public/images/Country.png": () => import('./Country_DlrBE-MH.mjs'),"/public/images/Cupid Project Logo HD.png": () => import('./Cupid Project Logo HD_CgHKa0OP.mjs'),"/public/images/Cupid Project Side By Side Logo.png": () => import('./Cupid Project Side By Side Logo_bF6CZFW_.mjs'),"/public/images/Cupid Project Splash.png": () => import('./Cupid Project Splash_CTaGWpFq.mjs'),"/public/images/Diabetic Daycare - Terminal.png": () => import('./Diabetic Daycare - Terminal_DRqZvOjF.mjs'),"/public/images/Diabetic Daycare Splash.png": () => import('./Diabetic Daycare Splash_Clk_OKUy.mjs'),"/public/images/Diet Coke.png": () => import('./Diet Coke_Cb_jSFb5.mjs'),"/public/images/Dis Co.png": () => import('./Dis Co_C7zdGVDn.mjs'),"/public/images/EnGauge Splash.png": () => import('./EnGauge Splash_DQCtaAUP.mjs'),"/public/images/EnGauge Spread.png": () => import('./EnGauge Spread_GItZYv07.mjs'),"/public/images/Engauge Report.png": () => import('./Engauge Report_gWpUCrZq.mjs'),"/public/images/Escape Room Spread.png": () => import('./Escape Room Spread_sbhYE0ED.mjs'),"/public/images/Existentialism.png": () => import('./Existentialism_CMNdSo_B.mjs'),"/public/images/FINAL GAME POINTER.png": () => import('./FINAL GAME POINTER_UEXPdIL1.mjs'),"/public/images/FINAL GAME.png": () => import('./FINAL GAME_BPaLsX2B.mjs'),"/public/images/Favicon.png": () => import('./Favicon_DDPxiqwg.mjs'),"/public/images/Final1.png": () => import('./Final1_B2LghmyR.mjs'),"/public/images/Final2.png": () => import('./Final2_B8p9Vvvm.mjs'),"/public/images/Final3.png": () => import('./Final3_B8k5FqXZ.mjs'),"/public/images/Final4.png": () => import('./Final4_CG8JB_-O.mjs'),"/public/images/Final5.png": () => import('./Final5_ccI_4--L.mjs'),"/public/images/Final6.png": () => import('./Final6_GZl4mTGE.mjs'),"/public/images/Final7.png": () => import('./Final7_DnZayUku.mjs'),"/public/images/Fork();.png": () => import('./Fork()__CzXm3kW2.mjs'),"/public/images/GUI Dev.png": () => import('./GUI Dev_C3DHhLDA.mjs'),"/public/images/If I was a HAG.png": () => import('./If I was a HAG_DFND5oCp.mjs'),"/public/images/Italy.png": () => import('./Italy_D2bdq2Kn.mjs'),"/public/images/LO.png": () => import('./LO_CtniT7zG.mjs'),"/public/images/Lattice.png": () => import('./Lattice_DHVjRtQ-.mjs'),"/public/images/Lemon.png": () => import('./Lemon_CWX5k2JB.mjs'),"/public/images/Life Juice.png": () => import('./Life Juice_BO2Y-w6s.mjs'),"/public/images/LogoDark.png": () => import('./LogoDark_DW1vrhk5.mjs'),"/public/images/LogoLight.png": () => import('./LogoLight_BdHHQP-A.mjs'),"/public/images/Marx.png": () => import('./Marx_CK2UysHT.mjs'),"/public/images/Masarap to my ears.png": () => import('./Masarap to my ears_CGSq8dAY.mjs'),"/public/images/Matthew Blob.png": () => import('./Matthew Blob_BPdgdNQY.mjs'),"/public/images/Matthew Pic.jpeg": () => import('./Matthew Pic_B1k4Cv6w.mjs'),"/public/images/Matthew.jpeg": () => import('./Matthew_N4uWnrx8.mjs'),"/public/images/Nab 3D Splash.png": () => import('./Nab 3D Splash_CHrxBmwH.mjs'),"/public/images/Norm Splash.png": () => import('./Norm Splash_Dv-ahZsV.mjs'),"/public/images/Norm1.png": () => import('./Norm1_WeLqBl87.mjs'),"/public/images/Norm2.png": () => import('./Norm2_D-vbJyTu.mjs'),"/public/images/Norm3.png": () => import('./Norm3_2HPy61uV.mjs'),"/public/images/Norm4.png": () => import('./Norm4_Ctke59WP.mjs'),"/public/images/On Type 1 Splash.png": () => import('./On Type 1 Splash_BM7dmnsN.mjs'),"/public/images/Pride.png": () => import('./Pride_CVlgJM4b.mjs'),"/public/images/Report1.png": () => import('./Report1_DRFsnI2v.mjs'),"/public/images/Report2.png": () => import('./Report2_DtFBHw16.mjs'),"/public/images/SLATT Splash.png": () => import('./SLATT Splash_9gGo0ReD.mjs'),"/public/images/Sky High Hypoglycemia Splash.png": () => import('./Sky High Hypoglycemia Splash_umxUYwo4.mjs'),"/public/images/Spread Test.png": () => import('./Spread Test_DcwmeC5F.mjs'),"/public/images/Strawberry.png": () => import('./Strawberry_Oif9ewQl.mjs'),"/public/images/Summer.png": () => import('./Summer_BtAeRPHQ.mjs'),"/public/images/T1D.png": () => import('./T1D_todU9dQs.mjs'),"/public/images/TIME.png": () => import('./TIME_CGTJLpTu.mjs'),"/public/images/The Hall.png": () => import('./The Hall_CE0N3OGw.mjs'),"/public/images/The River.png": () => import('./The River_B-RXAMJA.mjs'),"/public/images/The Street.png": () => import('./The Street_pNgjoEjG.mjs'),"/public/images/Turn Me On.png": () => import('./Turn Me On_CsTmBjEK.mjs'),"/public/images/Waves banner.png": () => import('./Waves banner_C_bx0k1n.mjs'),"/public/images/avatar-sm.png": () => import('./avatar-sm_CLUwukmA.mjs'),"/public/images/avatar.png": () => import('./avatar_Cvp-1XkP.mjs'),"/public/images/banner.png": () => import('./banner_BOEybz8i.mjs'),"/public/images/call-to-action.png": () => import('./call-to-action_CjjEb6Yk.mjs'),"/public/images/face.png": () => import('./face_CjnjzLGf.mjs'),"/public/images/image-placeholder.png": () => import('./image-placeholder_DOClAR1J.mjs'),"/public/images/logo-darkmode.png": () => import('./logo-darkmode_wZv3tl7B.mjs'),"/public/images/logo.png": () => import('./logo_D10QCLV0.mjs'),"/public/images/para las chicas.png": () => import('./para las chicas___-aoKnB.mjs'),"/public/images/service-1.png": () => import('./service-1_B9cHYE9V.mjs'),"/public/images/service-2.png": () => import('./service-2_BhRGYUlC.mjs'),"/public/images/service-3.png": () => import('./service-3_lWWViG_o.mjs'),"/public/images/slatt1.png": () => import('./slatt1_C0goI34O.mjs'),"/public/images/slatt2.png": () => import('./slatt2_DzSVSk_Y.mjs'),"/public/images/slatt3.png": () => import('./slatt3_DsUVocqb.mjs')});
  const isValidPath = images[src] ? true : false;
  !isValidPath && console.error(
    `\x1B[31mImage not found - ${src}.\x1B[0m Make sure the image is in the /public/images folder.`
  );
  return renderTemplate`${isValidPath && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": images[src](), "alt": alt, "width": width, "height": height, "loading": loading, "decoding": decoding, "class": className, "format": format, "style": style })}`}`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/components/ImageMod.astro", void 0);

const $$Astro$4 = createAstro("https://matthewjguck.github.io/");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Logo;
  const { src, srcDarkmode } = Astro2.props;
  const {
    logo,
    logo_darkmode,
    logo_width,
    logo_height,
    logo_text,
    title
  } = config.site;
  const { theme_switcher } = config.settings;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="navbar-brand inline-block"> ${src || srcDarkmode || logo || logo_darkmode ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": src ? src : logo, "class": `inline-block ${theme_switcher && "dark:hidden"}`, "width": logo_width.replace("px", "") * 2, "height": logo_height.replace("px", "") * 2, "alt": title, "style": {
    height: logo_height.replace("px", "") + "px",
    width: logo_width.replace("px", "") + "px"
  }, "format": "webp" })} ${theme_switcher && renderTemplate`${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": srcDarkmode ? srcDarkmode : logo_darkmode, "class": "hidden dark:inline-block", "width": logo_width.replace("px", "") * 2, "height": logo_height.replace("px", "") * 2, "alt": title, "style": {
    height: logo_height.replace("px", "") + "px",
    width: logo_width.replace("px", "") + "px"
  }, "format": "webp" })}`}` })}` : logo_text ? logo_text : title} </a>`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/components/Logo.astro", void 0);

const main = [
	{
		name: "Home",
		url: "/"
	},
	{
		name: "Projects",
		url: "",
		hasChildren: true,
		children: [
			{
				name: "EnGauge",
				url: "/engauge"
			},
			{
				name: "Diabetic Daycare",
				url: "/daycare"
			},
			{
				name: "The Cupid Project",
				url: "/thecupidproject"
			},
			{
				name: "Nab 3D",
				url: "/nab3d"
			},
			{
				name: "SLATT",
				url: "/slatt"
			},
			{
				name: "On Type 1",
				url: "/ontype1"
			},
			{
				name: "Normalizing Sustainability",
				url: "/normalizingsustainability"
			},
			{
				name: "Sky High Hypoglycemia",
				url: "/skyhigh"
			}
		]
	},
	{
		name: "Gallery",
		url: "/gallery"
	}
];
const footer = [
	{
		name: "Elements",
		url: "/elements"
	},
	{
		name: "Privacy Policy",
		url: "/privacy-policy"
	}
];
const menu = {
	main: main,
	footer: footer
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-theme-light dark:bg-darkmode-theme-light"> <div class="container"> <div class="row items-center py-10"> <div class="mb-8 text-center align-bottom"> ${renderComponent($$result, "Logo", $$Logo, {})} </div> </div> </div> <div class="border-t border-border py-7 dark:border-darkmode-border"> <div class="container text-center text-light dark:text-darkmode-light"> <p>September 2024</p> </div> </div> </footer>`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/partials/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://matthewjguck.github.io/");
const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeSwitcher;
  const {
    theme_switcher,
    default_theme
  } = config.settings;
  const { className } = Astro2.props;
  return renderTemplate`${theme_switcher && renderTemplate`${maybeRenderHead()}<div${addAttribute(`theme-switcher ${className}`, "class")}><input id="theme-switcher" data-theme-switcher type="checkbox"><label for="theme-switcher"><span class="sr-only">theme switcher</span><span><svg class="absolute left-[4px] top-[4px] z-10 opacity-100 dark:opacity-0" viewBox="0 0 56 56" fill="#fff" height="16" width="16"><path d="M30 4.6c0-1-.9-2-2-2a2 2 0 0 0-2 2v5c0 1 .9 2 2 2s2-1 2-2Zm9.6 9a2 2 0 0 0 0 2.8c.8.8 2 .8 2.9 0L46 13a2 2 0 0 0 0-2.9 2 2 0 0 0-3 0Zm-26 2.8c.7.8 2 .8 2.8 0 .8-.7.8-2 0-2.9L13 10c-.7-.7-2-.8-2.9 0-.7.8-.7 2.1 0 3ZM28 16a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12Zm23.3 14c1.1 0 2-.9 2-2s-.9-2-2-2h-4.9a2 2 0 0 0-2 2c0 1.1 1 2 2 2ZM4.7 26a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4.9c1 0 2-.9 2-2s-1-2-2-2Zm37.8 13.6a2 2 0 0 0-3 0 2 2 0 0 0 0 2.9l3.6 3.5a2 2 0 0 0 2.9 0c.8-.8.8-2.1 0-3ZM10 43.1a2 2 0 0 0 0 2.9c.8.7 2.1.8 3 0l3.4-3.5c.8-.8.8-2.1 0-2.9-.8-.8-2-.8-2.9 0Zm20 3.4c0-1.1-.9-2-2-2a2 2 0 0 0-2 2v4.9c0 1 .9 2 2 2s2-1 2-2Z"></path></svg><svg class="absolute left-[4px] top-[4px] z-10 opacity-0 dark:opacity-100" viewBox="0 0 24 24" fill="none" height="16" width="16"><path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M8.2 2.2c1-.4 2 .6 1.6 1.5-1 3-.4 6.4 1.8 8.7a8.4 8.4 0 0 0 8.7 1.8c1-.3 2 .5 1.5 1.5v.1a10.3 10.3 0 0 1-9.4 6.2A10.3 10.3 0 0 1 3.2 6.7c1-2 2.9-3.5 4.9-4.4Z"></path></svg></span></label></div>`}`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/components/ThemeSwitcher.astro", void 0);

const $$Astro$2 = createAstro("https://matthewjguck.github.io/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { main } = menu;
  const { navigation_button, settings } = config;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`header z-30 ${settings.sticky_header && "sticky top-0"}`, "class")} data-astro-cid-rq644orq> <nav class="navbar container" data-astro-cid-rq644orq> <!-- logo --> <div class="order-0" data-astro-cid-rq644orq> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-rq644orq": true })} </div> <!-- navbar toggler --> <input id="nav-toggle" type="checkbox" class="hidden" data-astro-cid-rq644orq> <label for="nav-toggle" class="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1" data-astro-cid-rq644orq> <svg id="show-button" class="h-6 fill-current block" viewBox="0 0 20 20" data-astro-cid-rq644orq> <title>Menu Open</title> <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" data-astro-cid-rq644orq></path> </svg> <svg id="hide-button" class="h-6 fill-current hidden" viewBox="0 0 20 20" data-astro-cid-rq644orq> <title>Menu Close</title> <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)" data-astro-cid-rq644orq></polygon> </svg> </label> <!-- /navbar toggler --> <ul id="nav-menu" class="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8" data-astro-cid-rq644orq> ${main.map((menu2) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-rq644orq": true }, { "default": ($$result2) => renderTemplate`${menu2.hasChildren ? renderTemplate`<li class="nav-item nav-dropdown group relative" data-astro-cid-rq644orq> <span${addAttribute(`nav-link inline-flex items-center ${menu2.children?.map(({ url }) => url).includes(pathname) || menu2.children?.map(({ url }) => `${url}/`).includes(pathname) ? "active" : ""}`, "class")} data-astro-cid-rq644orq> ${menu2.name} <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20" data-astro-cid-rq644orq> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" data-astro-cid-rq644orq></path> </svg> </span> <ul class="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100" data-astro-cid-rq644orq> ${menu2.children?.map((child) => renderTemplate`<li class="nav-dropdown-item" data-astro-cid-rq644orq> <a${addAttribute(child.url, "href")}${addAttribute(`nav-dropdown-link block ${(pathname === `${child.url}/` || pathname === child.url) && "active"}`, "class")} data-astro-cid-rq644orq> ${child.name} </a> </li>`)} </ul> </li>` : renderTemplate`<li class="nav-item" data-astro-cid-rq644orq> <a${addAttribute(menu2.url, "href")}${addAttribute(`nav-link block ${(pathname === `${menu2.url}/` || pathname === menu2.url) && "active"}`, "class")} data-astro-cid-rq644orq> ${menu2.name} </a> </li>`}` })}`)} ${navigation_button.enable && renderTemplate`<li class="mt-4 inline-block lg:hidden" data-astro-cid-rq644orq> <a class="btn btn-outline-primary btn-sm"${addAttribute(navigation_button.link, "href")} data-astro-cid-rq644orq> ${navigation_button.label} </a> </li>`} </ul> <div class="order-1 ml-auto flex items-center md:order-2 lg:ml-0" data-astro-cid-rq644orq> ${settings.search && renderTemplate`<button class="border-border text-dark hover:text-primary dark:border-darkmode-border mr-5 inline-block border-r pr-5 text-xl dark:text-white dark:hover:text-darkmode-primary" aria-label="search" data-search-trigger data-astro-cid-rq644orq> ${renderComponent($$result, "IoSearch", IoSearch, { "data-astro-cid-rq644orq": true })} </button>`} ${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "className": "mr-5", "data-astro-cid-rq644orq": true })} ${navigation_button.enable && renderTemplate`<a class="btn btn-outline-primary btn-sm hidden lg:inline-block"${addAttribute(navigation_button.link, "href")} data-astro-cid-rq644orq> ${navigation_button.label} </a>`} </div> </nav>  </header>`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/partials/Header.astro", void 0);

const $$Astro$1 = createAstro("https://matthewjguck.github.io/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/guck/matthewjguck.github.io/node_modules/astro/components/ViewTransitions.astro", void 0);

const searchData = [
	{
		group: "blog",
		slug: "blog/post-1",
		frontmatter: {
			title: "How to build an Application with modern Technology",
			meta_title: "",
			description: "this is meta description",
			date: "2022-04-04T05:00:00.000Z",
			image: "/images/image-placeholder.png",
			categories: [
				"Application",
				"Data"
			],
			author: "John Doe",
			tags: [
				"nextjs",
				"tailwind"
			],
			draft: false
		},
		content: "\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n\n## Creative Design\n\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\n\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n"
	},
	{
		group: "blog",
		slug: "blog/post-2",
		frontmatter: {
			title: "How to build an Application with modern Technology",
			meta_title: "",
			description: "this is meta description",
			date: "2022-04-04T05:00:00.000Z",
			image: "/images/image-placeholder.png",
			categories: [
				"Technology",
				"Data"
			],
			author: "Sam Wilson",
			tags: [
				"technology",
				"tailwind"
			],
			draft: false
		},
		content: "\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n\n## Creative Design\n\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\n\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n"
	},
	{
		group: "blog",
		slug: "blog/post-3",
		frontmatter: {
			title: "How to build an Application with modern Technology",
			meta_title: "",
			description: "this is meta description",
			date: "2022-04-04T05:00:00.000Z",
			image: "/images/image-placeholder.png",
			categories: [
				"Software"
			],
			author: "John Doe",
			tags: [
				"software",
				"tailwind"
			],
			draft: false
		},
		content: "\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n\n## Creative Design\n\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\n\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n"
	},
	{
		group: "blog",
		slug: "blog/post-4",
		frontmatter: {
			title: "How to build an Application with modern Technology",
			meta_title: "",
			description: "this is meta description",
			date: "2022-04-04T05:00:00.000Z",
			image: "/images/image-placeholder.png",
			categories: [
				"Architecture"
			],
			author: "John Doe",
			tags: [
				"silicon",
				"technology"
			],
			draft: false
		},
		content: "\nNemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n\n## Creative Design\n\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\n\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\n"
	}
];

const SearchResult = ({
  searchResult,
  searchString
}) => {
  const generateSearchGroup = (searchResult2) => {
    const joinDataByGroup = searchResult2.reduce(
      (groupItems, item) => {
        const groupIndex = groupItems.findIndex(
          (group) => group.group === item.group
        );
        if (groupIndex === -1) {
          groupItems.push({
            group: item.group,
            groupItems: [
              {
                frontmatter: { ...item.frontmatter },
                slug: item.slug,
                content: item.content
              }
            ]
          });
        } else {
          groupItems[groupIndex].groupItems.push({
            frontmatter: { ...item.frontmatter },
            slug: item.slug,
            content: item.content
          });
        }
        return groupItems;
      },
      []
    );
    return joinDataByGroup;
  };
  const finalResult = generateSearchGroup(searchResult);
  const matchMarker = (text, substring) => {
    const parts = text.split(new RegExp(`(${substring})`, "gi"));
    return parts.map(
      (part, index) => part.toLowerCase() === substring.toLowerCase() ? /* @__PURE__ */ jsx("mark", { children: part }, index) : part
    );
  };
  const matchUnderline = (text, substring) => {
    const parts = text?.split(new RegExp(`(${substring})`, "gi"));
    return parts?.map(
      (part, index) => part.toLowerCase() === substring.toLowerCase() ? /* @__PURE__ */ jsx("span", { className: "underline", children: part }, index) : part
    );
  };
  const matchContent = (content, substring) => {
    const plainContent = plainify(content);
    const position = plainContent.toLowerCase().indexOf(substring.toLowerCase());
    let wordStart = position;
    while (wordStart > 0 && plainContent[wordStart - 1] !== " ") {
      wordStart--;
    }
    const matches = plainContent.substring(
      wordStart,
      substring.length + position
    );
    const matchesAfter = plainContent.substring(
      substring.length + position,
      substring.length + position + 80
    );
    return /* @__PURE__ */ jsxs(Fragment$1, { children: [
      matchMarker(matches, substring),
      matchesAfter
    ] });
  };
  return /* @__PURE__ */ jsx("div", { className: "search-wrapper-body", children: searchString ? /* @__PURE__ */ jsx("div", { className: "search-result", children: finalResult.length > 0 ? finalResult.map((result) => /* @__PURE__ */ jsxs("div", { className: "search-result-group", children: [
    /* @__PURE__ */ jsx("p", { className: "search-result-group-title", children: titleify(result.group) }),
    result.groupItems.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        id: "searchItem",
        className: "search-result-item",
        children: [
          item.frontmatter.image && /* @__PURE__ */ jsx("div", { className: "search-result-item-image", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.frontmatter.image,
              alt: item.frontmatter.title
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "search-result-item-body", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/${item.slug}`,
                className: "search-result-item-title search-result-item-link",
                children: matchUnderline(item.frontmatter.title, searchString)
              }
            ),
            item.frontmatter.description && /* @__PURE__ */ jsx("p", { className: "search-result-item-description", children: matchUnderline(
              item.frontmatter.description,
              searchString
            ) }),
            item.content && /* @__PURE__ */ jsx("p", { className: "search-result-item-content", children: matchContent(item.content, searchString) }),
            /* @__PURE__ */ jsxs("div", { className: "search-result-item-taxonomies", children: [
              item.frontmatter.categories && /* @__PURE__ */ jsxs("div", { className: "mr-2", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    width: "14",
                    height: "14",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: /* @__PURE__ */ jsx("path", { d: "M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2zm2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1V3zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z" })
                  }
                ),
                item.frontmatter.categories.map(
                  (category, index) => /* @__PURE__ */ jsxs("span", { children: [
                    matchUnderline(category, searchString),
                    item.frontmatter.categories && index !== item.frontmatter.categories.length - 1 && /* @__PURE__ */ jsx(Fragment$1, { children: ", " })
                  ] }, category)
                )
              ] }),
              item.frontmatter.tags && /* @__PURE__ */ jsxs("div", { className: "mr-2", children: [
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    width: "14",
                    height: "14",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ jsx("path", { d: "M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" }),
                      /* @__PURE__ */ jsx("path", { d: "M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" })
                    ]
                  }
                ),
                item.frontmatter.tags.map((tag, index) => /* @__PURE__ */ jsxs("span", { children: [
                  matchUnderline(tag, searchString),
                  item.frontmatter.tags && index !== item.frontmatter.tags.length - 1 && /* @__PURE__ */ jsx(Fragment$1, { children: ", " })
                ] }, tag))
              ] })
            ] })
          ] })
        ]
      },
      item.slug
    ))
  ] }, result.group)) : /* @__PURE__ */ jsxs("div", { className: "search-result-empty", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "mx-auto",
        width: "42",
        height: "42",
        viewBox: "0 0 47 47",
        fill: "none",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.10368 33.9625C9.90104 36.2184 13.2988 37.6547 16.9158 38.0692C21.6958 38.617 26.5063 37.3401 30.3853 34.4939C30.4731 34.6109 30.5668 34.7221 30.6721 34.8304L41.9815 46.1397C42.5323 46.6909 43.2795 47.0007 44.0587 47.001C44.838 47.0013 45.5854 46.692 46.1366 46.1412C46.6878 45.5904 46.9976 44.8432 46.9979 44.064C46.9981 43.2847 46.6888 42.5373 46.138 41.9861L34.8287 30.6767C34.7236 30.5704 34.6107 30.4752 34.4909 30.3859C37.3352 26.5046 38.6092 21.6924 38.0579 16.912C37.6355 13.2498 36.1657 9.81322 33.8586 6.9977L31.7805 9.09214C34.0157 11.9274 35.2487 15.4472 35.2487 19.0942C35.2487 21.2158 34.8308 23.3167 34.0189 25.2769C33.207 27.2371 32.0169 29.0181 30.5167 30.5184C29.0164 32.0186 27.2354 33.2087 25.2752 34.0206C23.315 34.8325 21.2141 35.2504 19.0925 35.2504C16.9708 35.2504 14.8699 34.8325 12.9098 34.0206C11.5762 33.4682 10.3256 32.7409 9.18992 31.8599L7.10368 33.9625ZM28.9344 6.28152C26.1272 4.12516 22.671 2.93792 19.0925 2.93792C14.8076 2.93792 10.6982 4.64009 7.66829 7.66997C4.6384 10.6999 2.93623 14.8093 2.93623 19.0942C2.93623 21.2158 3.35413 23.3167 4.16605 25.2769C4.72475 26.6257 5.4625 27.8897 6.35716 29.0358L4.2702 31.1391C1.35261 27.548 -0.165546 23.0135 0.00974294 18.3781C0.19158 13.5695 2.18233 9.00695 5.58371 5.60313C8.98509 2.19932 13.5463 0.205307 18.3547 0.0200301C22.9447 -0.156832 27.4369 1.32691 31.0132 4.18636L28.9344 6.28152Z",
              fill: "currentColor"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M3.13672 39.1367L38.3537 3.64355",
              stroke: "black",
              strokeWidth: "3",
              strokeLinecap: "round"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
      'No results for "',
      /* @__PURE__ */ jsx("strong", { children: searchString }),
      '"'
    ] })
  ] }) }) : /* @__PURE__ */ jsx("div", { className: "py-8 text-center", children: "Type something to search..." }) });
};

const SearchModal = () => {
  const [searchString, setSearchString] = useState("");
  const handleSearch = (e) => {
    setSearchString(e.currentTarget.value.replace("\\", "").toLowerCase());
  };
  const doSearch = (searchData2) => {
    const regex = new RegExp(`${searchString}`, "gi");
    if (searchString === "") {
      return [];
    } else {
      const searchResult2 = searchData2.filter((item) => {
        const title = item.frontmatter.title.toLowerCase().match(regex);
        const description = item.frontmatter.description?.toLowerCase().match(regex);
        const categories = item.frontmatter.categories?.join(" ").toLowerCase().match(regex);
        const tags = item.frontmatter.tags?.join(" ").toLowerCase().match(regex);
        const content = item.content.toLowerCase().match(regex);
        if (title || content || description || categories || tags) {
          return item;
        }
      });
      return searchResult2;
    }
  };
  const startTime = performance.now();
  const searchResult = doSearch(searchData);
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1e3).toFixed(3);
  useEffect(() => {
    const searchModal = document.getElementById("searchModal");
    const searchInput = document.getElementById("searchInput");
    const searchModalOverlay = document.getElementById("searchModalOverlay");
    const searchResultItems = document.querySelectorAll("#searchItem");
    const searchModalTriggers = document.querySelectorAll(
      "[data-search-trigger]"
    );
    searchModalTriggers.forEach((button) => {
      button.addEventListener("click", function() {
        const searchModal2 = document.getElementById("searchModal");
        searchModal2.classList.add("show");
        searchInput.focus();
      });
    });
    searchModalOverlay.addEventListener("click", function() {
      searchModal.classList.remove("show");
    });
    let selectedIndex = -1;
    const updateSelection = () => {
      searchResultItems.forEach((item, index) => {
        if (index === selectedIndex) {
          item.classList.add("search-result-item-active");
        } else {
          item.classList.remove("search-result-item-active");
        }
      });
      searchResultItems[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    };
    document.addEventListener("keydown", function(event) {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        searchModal.classList.add("show");
        searchInput.focus();
        updateSelection();
      }
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
      }
      if (event.key === "Escape") {
        searchModal.classList.remove("show");
      }
      if (event.key === "ArrowUp" && selectedIndex > 0) {
        selectedIndex--;
      } else if (event.key === "ArrowDown" && selectedIndex < searchResultItems.length - 1) {
        selectedIndex++;
      } else if (event.key === "Enter") {
        const activeLink = document.querySelector(
          ".search-result-item-active a"
        );
        if (activeLink) {
          activeLink?.click();
        }
      }
      updateSelection();
    });
  }, [searchString]);
  return /* @__PURE__ */ jsxs("div", { id: "searchModal", className: "search-modal", children: [
    /* @__PURE__ */ jsx("div", { id: "searchModalOverlay", className: "search-modal-overlay" }),
    /* @__PURE__ */ jsxs("div", { className: "search-wrapper", children: [
      /* @__PURE__ */ jsxs("div", { className: "search-wrapper-header", children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            htmlFor: "searchInput",
            className: "absolute left-7 top-[calc(50%-7px)]",
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "search icon" }),
              searchString ? /* @__PURE__ */ jsx(
                "svg",
                {
                  onClick: () => setSearchString(""),
                  viewBox: "0 0 512 512",
                  height: "18",
                  width: "18",
                  className: "hover:text-red-500 cursor-pointer -mt-0.5",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "currentcolor",
                      d: "M256 512A256 256 0 10256 0a256 256 0 100 512zM175 175c9.4-9.4 24.6-9.4 33.9.0l47 47 47-47c9.4-9.4 24.6-9.4 33.9.0s9.4 24.6.0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6.0 33.9s-24.6 9.4-33.9.0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9.0s-9.4-24.6.0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6.0-33.9z"
                    }
                  )
                }
              ) : /* @__PURE__ */ jsx(
                "svg",
                {
                  viewBox: "0 0 512 512",
                  height: "18",
                  width: "18",
                  className: "-mt-0.5",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "currentcolor",
                      d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8.0 45.3s-32.8 12.5-45.3.0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9.0 208S93.1.0 208 0 416 93.1 416 208zM208 352a144 144 0 100-288 144 144 0 100 288z"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "searchInput",
            placeholder: "Search...",
            className: "search-wrapper-header-input",
            type: "input",
            name: "search",
            value: searchString,
            onChange: handleSearch,
            autoFocus: true,
            autoComplete: "off"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(SearchResult, { searchResult, searchString }),
      /* @__PURE__ */ jsxs("div", { className: "search-wrapper-footer", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("kbd", { children: /* @__PURE__ */ jsx(
            "svg",
            {
              width: "14",
              height: "14",
              fill: "currentcolor",
              viewBox: "0 0 16 16",
              children: /* @__PURE__ */ jsx("path", { d: "M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 011.506.0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 01-.753-1.659z" })
            }
          ) }),
          /* @__PURE__ */ jsx("kbd", { children: /* @__PURE__ */ jsx(
            "svg",
            {
              width: "14",
              height: "14",
              fill: "currentcolor",
              viewBox: "0 0 16 16",
              children: /* @__PURE__ */ jsx("path", { d: "M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 001.506.0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 00-.753 1.659z" })
            }
          ) }),
          "to navigate"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("kbd", { children: /* @__PURE__ */ jsx(
            "svg",
            {
              width: "12",
              height: "12",
              fill: "currentcolor",
              viewBox: "0 0 16 16",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M14.5 1.5a.5.5.0 01.5.5v4.8a2.5 2.5.0 01-2.5 2.5H2.707l3.347 3.346a.5.5.0 01-.708.708l-4.2-4.2a.5.5.0 010-.708l4-4a.5.5.0 11.708.708L2.707 8.3H12.5A1.5 1.5.0 0014 6.8V2a.5.5.0 01.5-.5z"
                }
              )
            }
          ) }),
          "to select"
        ] }),
        searchString && /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            searchResult.length,
            " "
          ] }),
          " results - in",
          " ",
          /* @__PURE__ */ jsxs("strong", { children: [
            totalTime,
            " "
          ] }),
          " seconds"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("kbd", { children: "ESC" }),
          " to close"
        ] })
      ] })
    ] })
  ] });
};

const $$AnimateOnScroll = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/guck/matthewjguck.github.io/src/layouts/components/AnimateOnScroll.astro", void 0);

const $$Astro = createAstro("https://matthewjguck.github.io/");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title, meta_title, description, image, noindex, canonical } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><!-- favicon --><link rel="shortcut icon"${addAttribute(config.site.favicon, "href")}><!-- theme meta --><meta name="theme-name" content="astroplate"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- responsive meta --><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><!-- title --><title>
      ${plainify(meta_title ? meta_title : title ? title : config.site.title)}
    </title><!-- canonical url -->${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`}<!-- noindex robots -->${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<!-- meta-description --><meta name="description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<!-- author from config.json --><meta name="author"${addAttribute(config.metadata.meta_author, "content")}><!-- og-title --><meta property="og:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- og-description --><meta property="og:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content")}><!-- twitter-title --><meta name="twitter:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- twitter-description --><meta name="twitter:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><!-- og-image --><meta property="og:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><!-- twitter-image --><meta name="twitter:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><meta name="twitter:card" content="summary_large_image">${renderHead()}</head> <body> ${renderComponent($$result, "TwSizeIndicator", $$TwSizeIndicator, {})} ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "SearchModal", SearchModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/guck/matthewjguck.github.io/src/layouts/helpers/SearchModal", "client:component-export": "default" })} <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "AnimateOnScroll", $$AnimateOnScroll, {})} </body></html>`;
}, "/Users/guck/matthewjguck.github.io/src/layouts/Base.astro", void 0);

export { $$Base as $, $$Image as a, humanize as h, markdownify as m };
