const Matthew_Pic = new Proxy({"src":"/_astro/Matthew Pic.DlSNpFzr.jpeg","width":2975,"height":3719,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Matthew Pic.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Matthew Pic.jpeg");
							return target[name];
						}
					});

export { Matthew_Pic as default };
