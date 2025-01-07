const Pride = new Proxy({"src":"/_astro/Pride.DeDPofBL.png","width":10240,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Pride.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Pride.png");
							return target[name];
						}
					});

export { Pride as default };
