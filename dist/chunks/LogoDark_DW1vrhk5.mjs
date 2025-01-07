const LogoDark = new Proxy({"src":"/_astro/LogoDark.DllZMYd7.png","width":311,"height":245,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/LogoDark.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/LogoDark.png");
							return target[name];
						}
					});

export { LogoDark as default };
