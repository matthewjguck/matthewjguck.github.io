const slatt1 = new Proxy({"src":"/_astro/slatt1.BR89N8ck.png","width":2940,"height":1844,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/slatt1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/slatt1.png");
							return target[name];
						}
					});

export { slatt1 as default };
