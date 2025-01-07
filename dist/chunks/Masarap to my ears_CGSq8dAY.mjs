const Masarap_to_my_ears = new Proxy({"src":"/_astro/Masarap to my ears.bY0R3GCX.png","width":1440,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Masarap to my ears.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Masarap to my ears.png");
							return target[name];
						}
					});

export { Masarap_to_my_ears as default };
