const If_I_was_a_HAG = new Proxy({"src":"/_astro/If I was a HAG.DqYi1jwa.png","width":1440,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/If I was a HAG.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/If I was a HAG.png");
							return target[name];
						}
					});

export { If_I_was_a_HAG as default };
