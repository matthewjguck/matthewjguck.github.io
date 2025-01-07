const Final2 = new Proxy({"src":"/_astro/Final2.BuKThXE7.png","width":1440,"height":1864,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Final2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Final2.png");
							return target[name];
						}
					});

export { Final2 as default };
