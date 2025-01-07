const imagePlaceholder = new Proxy({"src":"/_astro/image-placeholder.DyBpoAJD.png","width":1096,"height":480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/image-placeholder.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/image-placeholder.png");
							return target[name];
						}
					});

export { imagePlaceholder as default };
