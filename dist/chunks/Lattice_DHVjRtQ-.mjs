const Lattice = new Proxy({"src":"/_astro/Lattice.mw1dyzrV.png","width":1964,"height":2500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Lattice.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Lattice.png");
							return target[name];
						}
					});

export { Lattice as default };
