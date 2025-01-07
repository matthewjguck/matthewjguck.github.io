const Diet_Coke = new Proxy({"src":"/_astro/Diet Coke.Chi6dq6W.png","width":3300,"height":5100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Diet Coke.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Diet Coke.png");
							return target[name];
						}
					});

export { Diet_Coke as default };
