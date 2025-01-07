const logoDarkmode = new Proxy({"src":"/_astro/logo-darkmode.BKNj4L4F.png","width":154,"height":28,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/logo-darkmode.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/logo-darkmode.png");
							return target[name];
						}
					});

export { logoDarkmode as default };
