const Canes = new Proxy({"src":"/_astro/Canes.Dl3ied5G.png","width":3300,"height":5100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Canes.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Canes.png");
							return target[name];
						}
					});

export { Canes as default };
