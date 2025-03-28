/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_Bw2CXZbd.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$Base } from '../chunks/Base_wW0F8rhI.mjs';
import { g as getEntry } from '../chunks/_astro_content_EbfCbQ-i.mjs';
export { renderers } from '../renderers.mjs';

const $$Daycare = createComponent(async ($$result, $$props, $$slots) => {
  const daycare = await getEntry("daycare", "-index");
  const { title, description, meta_title, images, details, content } = daycare.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm"> <div class="container"> <div class="row mb-12"> <div class="col-5"> <h2 class="title mb-5">${title}</h2> <div class="mb-5"> <h5>${description}</h5> <p>[This project is still in development.]</p> </div> <div class="date mb-3"> <h4>Date</h4> ${details.date} </div> <div class="type mb-3"> <h4>Project Type</h4> ${details.type} </div> <div class="location mb-3"> <h4>Location</h4> ${details.location} </div> <div class="role mb-3"> <h4>Skills</h4> ${details.role} </div> </div> <div class="col-7 mb-5"> <img${addAttribute(images.splash, "src")}${addAttribute(title, "alt")}${addAttribute({ width: "100%", borderRadius: "16px" }, "style")}> <h6 class="mt-5 flex justify-center">Proof-of-concept showing game UI.</h6> </div> </div> <!-- Challenge and Action Section --> <challenge class="m-16"> <h3 class="flex justify-center">Challenge</h3> <div class="m-5 flex flex-col justify-center items-center" style="background-color: #2c2c2ce1; border-radius: 16px;"> <h4 class="mt-10 text-white">${unescapeHTML(markdownify(content.challenge))}</h4> <img src="/images/Challenges Diabetes.png" class="w-9/12" alt="Challenge Image"> </div> </challenge> <br> <goal class="m-16"> <h3 class="flex justify-center">Goal</h3> <div class="m-5 flex flex-col justify-center items-center" style="background-color: #2c2c2ce1; border-radius: 16px;"> <h4 class="mt-10 text-white text-center">
An educational point-and-click babysitting simulator that can teach non-diabetics<br> about carb counting, insulin 
          therapy, and the dangerous health<br> consequences of blood sugar mismanagement.
</h4> <img src="/images/FINAL GAME POINTER.png" class="m-8 w-9/12" alt="Challenge Image"> </div> </goal> <br> <action class="m-16"> <h3 class="text-center mb-8">Milestone 1</h3> <div class="m-5 p-6 flex flex-col justify-center items-center bg-[#2c2c2ce1] rounded-xl shadow-lg lg:p-8"> <h4 class="text-white text-xl font-semibold mb-6">
Text-based Prototype
</h4> <div class="flex flex-col lg:flex-row justify-center items-center gap-4"> <img src="/images/Diabetic Daycare - Terminal.png" class="m-8 w-full lg:w-5/12 rounded-lg shadow-md hover:shadow-lg transition-shadow" alt=""> <div class="text-white text-base lg:w-5/12 px-6"> <p class="mb-6 leading-relaxed"> <strong>During this stage of development:</strong><br>
• Text-only terminal interface<br>
• Can only consume carbs in 30g increments<br>
• Can only inject insulin in 3 unit increments
</p> <p class="leading-relaxed"> <strong>Primary Goals:</strong><br>
• Designing mathematical blood sugar model<br>
• Fine-tuning insulin and carb "strength" scalars
</p> </div> </div> <div class="m-8 flex flex-col lg:flex-row justify-center items-center gap-8"> <div class="text-white text-base lg:w-5/12 px-6"> <h5 class="text-white text-lg font-semibold mb-4"> <!-- Dynamic Title --> <span>${unescapeHTML(markdownify(content.curvetitle))}</span> </h5> <p class="text-white leading-relaxed"> <!-- Dynamic Content --> <span>${unescapeHTML(markdownify(content.curve))}</span> </p> </div> <img src="/images/Bell Curve.png" class="w-full lg:w-5/12 rounded-lg shadow-md hover:shadow-lg transition-shadow" alt="Challenge Image"> </div> </div> <challenge class="m-16"> <h3 class="flex justify-center">Milestone 2</h3> <div class="m-5 p-6 flex flex-col justify-center items-center bg-[#2c2c2ce1] rounded-xl shadow-lg lg:p-8"> <h4 class="text-white text-xl font-semibold mb-6">
Visual Design + Low Fidelity GUI
</h4> <div class="flex flex-col lg:flex-row justify-center items-center gap-4"> <img src="/images/GUI Dev.png" class="w-full lg:w-5/12 rounded-lg shadow-md hover:shadow-lg transition-shadow" alt=""> <div class="text-white text-base lg:w-5/12 px-6"> <p class="mb-6 leading-relaxed"> <strong>During this stage of development:</strong><br>
• Started GUI<br>
• Added different food options to the game<br> </p> <p class="leading-relaxed"> <strong>Next Steps:</strong><br>
• Add physical activity and variable insulin sensitivty<br>
• Add new locations to game (Playground, bedroom, etc.)
</p> </div> </div> </div> </challenge> <goal class="m-16"> <h3 class="flex justify-center">Milestone 3</h3> <div class="m-5 flex flex-col justify-center items-center" style="background-color: #2c2c2ce1; border-radius: 16px;"> <h4 class="m-10 text-white text-xl text-center">
[I'm still working on this part.] <br> Check back later!
</h4> </div> </goal> <br> <br> </action></div> </section> ` })}`;
}, "/Users/guck/matthewjguck.github.io/src/pages/daycare.astro", void 0);

const $$file = "/Users/guck/matthewjguck.github.io/src/pages/daycare.astro";
const $$url = "/daycare";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Daycare,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
