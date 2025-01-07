const Autumn = new Proxy({"src":"/_astro/Autumn.FjLfGE1e.png","width":18000,"height":2812,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Autumn.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Autumn.png");
							return target[name];
						}
					});

export { Autumn as default };
