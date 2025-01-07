const Final3 = new Proxy({"src":"/_astro/Final3.CVk5y5Hw.png","width":1440,"height":1864,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Final3.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Final3.png");
							return target[name];
						}
					});

export { Final3 as default };
