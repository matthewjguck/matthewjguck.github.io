const Report1 = new Proxy({"src":"/_astro/Report1.jRPn6bNc.png","width":1440,"height":7455,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Report1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Report1.png");
							return target[name];
						}
					});

export { Report1 as default };
