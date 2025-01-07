const EnGauge_Splash = new Proxy({"src":"/_astro/EnGauge Splash.B-BQH0BV.png","width":1440,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/guck/matthewjguck.github.io/public/images/EnGauge Splash.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/guck/matthewjguck.github.io/public/images/EnGauge Splash.png");
							return target[name];
						}
					});

export { EnGauge_Splash as default };
