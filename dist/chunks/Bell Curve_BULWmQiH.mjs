const Bell_Curve = new Proxy({"src":"/_astro/Bell Curve.DvK9g3Eu.png","width":1260,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Bell Curve.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Bell Curve.png");
							return target[name];
						}
					});

export { Bell_Curve as default };
