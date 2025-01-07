const Spread_Test = new Proxy({"src":"/_astro/Spread Test.GHc7RdtB.png","width":2160,"height":1536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Spread Test.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Spread Test.png");
							return target[name];
						}
					});

export { Spread_Test as default };
