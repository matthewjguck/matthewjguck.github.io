const para_las_chicas = new Proxy({"src":"/_astro/para las chicas.DKb9_fYi.png","width":1440,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/para las chicas.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/para las chicas.png");
							return target[name];
						}
					});

export { para_las_chicas as default };
