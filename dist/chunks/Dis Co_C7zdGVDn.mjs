const Dis_Co = new Proxy({"src":"/_astro/Dis Co.r3TDgbKs.png","width":1440,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Dis Co.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Dis Co.png");
							return target[name];
						}
					});

export { Dis_Co as default };
