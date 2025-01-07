const Final1 = new Proxy({"src":"/_astro/Final1.k885S0t3.png","width":1440,"height":1864,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Final1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Final1.png");
							return target[name];
						}
					});

export { Final1 as default };
