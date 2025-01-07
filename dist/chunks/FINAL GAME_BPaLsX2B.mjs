const FINAL_GAME = new Proxy({"src":"/_astro/FINAL GAME.CQBSXMgS.png","width":1928,"height":1088,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/FINAL GAME.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/FINAL GAME.png");
							return target[name];
						}
					});

export { FINAL_GAME as default };
