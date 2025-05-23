const service2 = new Proxy({"src":"/_astro/service-2.DMFtkqmO.png","width":548,"height":526,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/service-2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/service-2.png");
							return target[name];
						}
					});

export { service2 as default };
