const Summer = new Proxy({"src":"/_astro/Summer.DWx-Kpzj.png","width":22500,"height":2812,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Summer.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Summer.png");
							return target[name];
						}
					});

export { Summer as default };
