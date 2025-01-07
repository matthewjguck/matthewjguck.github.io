const Bathrooms = new Proxy({"src":"/_astro/Bathrooms.foq7JbP9.png","width":10240,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Bathrooms.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Bathrooms.png");
							return target[name];
						}
					});

export { Bathrooms as default };
