const The_Hall = new Proxy({"src":"/_astro/The Hall.DjzrZj64.png","width":1964,"height":2500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/The Hall.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/The Hall.png");
							return target[name];
						}
					});

export { The_Hall as default };
