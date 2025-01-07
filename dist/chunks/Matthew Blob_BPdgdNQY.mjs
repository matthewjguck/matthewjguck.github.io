const Matthew_Blob = new Proxy({"src":"/_astro/Matthew Blob.CmPUmqPa.png","width":2160,"height":2240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/Matthew Blob.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/Matthew Blob.png");
							return target[name];
						}
					});

export { Matthew_Blob as default };
