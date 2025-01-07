const SLATT_Splash = new Proxy({"src":"/_astro/SLATT Splash.CH8jACHH.png","width":1440,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/SLATT Splash.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/SLATT Splash.png");
							return target[name];
						}
					});

export { SLATT_Splash as default };
