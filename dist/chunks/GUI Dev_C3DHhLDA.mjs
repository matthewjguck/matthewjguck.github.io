const GUI_Dev = new Proxy({"src":"/_astro/GUI Dev.CKSQV7VB.png","width":2828,"height":1700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/GUI Dev.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/GUI Dev.png");
							return target[name];
						}
					});

export { GUI_Dev as default };
