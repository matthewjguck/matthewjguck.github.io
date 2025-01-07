const Waves_banner = new Proxy({"src":"/_astro/Waves banner.BvIfeWMQ.png","width":4000,"height":1269,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Waves banner.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Waves banner.png");
							return target[name];
						}
					});

export { Waves_banner as default };
