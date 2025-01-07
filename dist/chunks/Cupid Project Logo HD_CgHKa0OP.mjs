const Cupid_Project_Logo_HD = new Proxy({"src":"/_astro/Cupid Project Logo HD.CwlMenUN.png","width":2500,"height":2500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Cupid Project Logo HD.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Cupid Project Logo HD.png");
							return target[name];
						}
					});

export { Cupid_Project_Logo_HD as default };
