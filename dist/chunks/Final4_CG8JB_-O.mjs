const Final4 = new Proxy({"src":"/_astro/Final4.BN_tpTXh.png","width":1440,"height":1864,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Final4.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Final4.png");
							return target[name];
						}
					});

export { Final4 as default };
