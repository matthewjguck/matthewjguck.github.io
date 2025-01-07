const Turn_Me_On = new Proxy({"src":"/_astro/Turn Me On.Bmd8OZ8Z.png","width":1440,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Turn Me On.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Turn Me On.png");
							return target[name];
						}
					});

export { Turn_Me_On as default };
