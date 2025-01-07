const LO = new Proxy({"src":"/_astro/LO.C9TqlYLQ.png","width":3300,"height":5100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/LO.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/LO.png");
							return target[name];
						}
					});

export { LO as default };
