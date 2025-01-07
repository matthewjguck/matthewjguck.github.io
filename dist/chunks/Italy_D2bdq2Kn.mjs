const Italy = new Proxy({"src":"/_astro/Italy.CkIjk54H.png","width":8640,"height":1350,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Italy.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Italy.png");
							return target[name];
						}
					});

export { Italy as default };
