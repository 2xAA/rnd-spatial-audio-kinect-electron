AFRAME.registerComponent("rotate", {
	init() {
		this.object = null;
		this.seedX = Math.random() * 100;
		this.seedY = Math.random() * 100;
		this.seedZ = Math.random() * 100;

		this.rotationXIterator = Math.round(Math.random()) > 0 ? 0.003 : -0.003;
		this.rotationYIterator = Math.round(Math.random()) > 0 ? 0.003 : -0.003;
		this.rotationZIterator = Math.round(Math.random()) > 0 ? 0.003 : -0.003;
	},

	tick() {
		if (!this.object) {
			const object = this.el.object3D;
			if (object) {
				this.object = object;
				this.object.rotation.x += this.seedX;
				this.object.rotation.z -= this.seedZ;
				this.object.rotation.y -= this.seedY;
			}
		}

		if (this.object) {
			this.object.rotation.x += this.rotationXIterator;
			this.object.rotation.y += this.rotationYIterator;
			this.object.rotation.z += this.rotationZIterator;
		}
	},
});
