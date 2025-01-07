const Matthew = new Proxy({"src":"/_astro/Matthew.CyxUH41m.jpeg","width":724,"height":1086,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Matthew.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Matthew.jpeg");
							return target[name];
						}
					});

export { Matthew as default };
