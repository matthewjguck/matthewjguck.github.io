const Life_Juice = new Proxy({"src":"/_astro/Life Juice.CdYb-XoW.png","width":3300,"height":5100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Life Juice.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Life Juice.png");
							return target[name];
						}
					});

export { Life_Juice as default };
