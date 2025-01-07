const Report2 = new Proxy({"src":"/_astro/Report2.Bsd5JYnH.png","width":1440,"height":5591,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Report2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Report2.png");
							return target[name];
						}
					});

export { Report2 as default };
