const Nab_3D_Splash = new Proxy({"src":"/_astro/Nab 3D Splash.Dic5lAUB.png","width":1440,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Nab 3D Splash.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Nab 3D Splash.png");
							return target[name];
						}
					});

export { Nab_3D_Splash as default };
