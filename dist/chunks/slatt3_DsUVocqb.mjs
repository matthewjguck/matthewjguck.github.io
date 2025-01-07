const slatt3 = new Proxy({"src":"/_astro/slatt3.DjVhbfu1.png","width":2940,"height":1842,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/slatt3.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/slatt3.png");
							return target[name];
						}
					});

export { slatt3 as default };
