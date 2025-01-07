const Final6 = new Proxy({"src":"/_astro/Final6.B4HcgXmb.png","width":1440,"height":1864,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Final6.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Final6.png");
							return target[name];
						}
					});

export { Final6 as default };
