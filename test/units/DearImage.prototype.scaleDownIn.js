let assert = require('assert').strict;

let DearImage = require('../../index');

module.exports = function() {
	{
		let image = DearImage.blank(300, 150);
		{
			let scalingX = 2;
			let scalingY = 3;
			let otherImage = image.scaleDownIn(image.sizeX * scalingX, image.sizeY * scalingY);
			assert.equal(otherImage, image);
		}
		{
			let scalingX = 2;
			let otherImage = image.scaleDownIn(image.sizeX * scalingX, image.sizeY);
			assert.equal(otherImage, image);
		}
		{
			let scalingX = 2;
			let otherImage = image.scaleDownIn(image.sizeX / scalingX, image.sizeY);
			assert.equal(otherImage.sizeX, Math.round(image.sizeX / scalingX));
			assert.equal(otherImage.sizeY, Math.round(image.sizeY / scalingX));
		}
		{
			let scalingX = 2;
			let scalingY = 3;
			let otherImage = image.scaleDownIn(image.sizeX / scalingX, image.sizeY / scalingY);
			assert.equal(otherImage.sizeX, Math.round(image.sizeX / Math.max(scalingX, scalingY)));
			assert.equal(otherImage.sizeY, Math.round(image.sizeY / Math.max(scalingX, scalingY)));
		}
		{
			let scalingX = 2;
			let otherImage = image.scaleDownIn(image.sizeX * scalingX, 0);
			assert.equal(otherImage, image);
		}
		{
			let otherImage = image.scaleDownIn(image.sizeX, 0);
			assert.equal(otherImage, image);
		}
		{
			let scalingX = 2;
			let otherImage = image.scaleDownIn(image.sizeX / scalingX, 0);
			assert.equal(otherImage.sizeX, Math.round(image.sizeX / scalingX));
			assert.equal(otherImage.sizeY, Math.round(image.sizeY / scalingX));
		}
		{
			let otherImage = image.scaleDownIn(0, 0);
			assert.equal(otherImage, image);
		}
	}
	{
		let image = DearImage.blank(100, 0);
		{
			let scalingX = 2;
			let sizeY = 200;
			let otherImage = image.scaleDownIn(image.sizeX * scalingX, sizeY);
			assert.equal(otherImage, image);
		}
		{
			let sizeY = 200;
			let otherImage = image.scaleDownIn(image.sizeX, sizeY);
			assert.equal(otherImage, image);
		}
		{
			let scalingX = 2;
			let sizeY = 200;
			let otherImage = image.scaleDownIn(image.sizeX / scalingX, sizeY);
			assert.equal(otherImage.sizeX, Math.round(image.sizeX / scalingX));
			assert.equal(otherImage.sizeY, 0);
		}
		{
			let scalingX = 2;
			let otherImage = image.scaleDownIn(image.sizeX * scalingX, 0);
			assert.equal(otherImage, image);
		}
		{
			let otherImage = image.scaleDownIn(image.sizeX, 0);
			assert.equal(otherImage, image);
		}
		{
			let scalingX = 2;
			let otherImage = image.scaleDownIn(image.sizeX / scalingX, 0);
			assert.equal(otherImage.sizeX, Math.round(image.sizeX / scalingX));
			assert.equal(otherImage.sizeY, 0);
		}
		{
			let otherImage = image.scaleDownIn(0, 0);
			assert.equal(otherImage, image);
		}
	}
	{
		let image = DearImage.blank();
		{
			let sizeX = 300;
			let sizeY = 150;
			let otherImage = image.scaleDownIn(sizeX, sizeY);
			assert.equal(otherImage, image);
		}
		{
			let sizeX = 200;
			let otherImage = image.scaleDownIn(sizeX, 0);
			assert.equal(otherImage, image);
		}
		{
			let otherImage = image.scaleDownIn(0, 0);
			assert.equal(otherImage, image);
		}
	}
};
