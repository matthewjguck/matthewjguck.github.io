const Strawberry = new Proxy({"src":"/_astro/Strawberry.CMFYZSvm.png","width":3300,"height":5100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Strawberry.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Strawberry.png");
							return target[name];
						}
					});

export { Strawberry as default };
