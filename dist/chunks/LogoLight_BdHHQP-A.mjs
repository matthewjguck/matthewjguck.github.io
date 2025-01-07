const LogoLight = new Proxy({"src":"/_astro/LogoLight.CT5JDKx3.png","width":311,"height":245,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/LogoLight.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/LogoLight.png");
							return target[name];
						}
					});

export { LogoLight as default };
