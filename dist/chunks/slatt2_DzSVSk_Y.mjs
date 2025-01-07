const slatt2 = new Proxy({"src":"/_astro/slatt2.B0mBppHU.png","width":2940,"height":1762,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/slatt2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/slatt2.png");
							return target[name];
						}
					});

export { slatt2 as default };
