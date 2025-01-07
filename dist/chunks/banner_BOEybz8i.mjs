const banner = new Proxy({"src":"/_astro/banner.BMwzPDc-.png","width":1199,"height":380,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/banner.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/banner.png");
							return target[name];
						}
					});

export { banner as default };
