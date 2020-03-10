export default function() {
	try {
		return new Image();
	} catch (unused) {
		// pass
	}
	throw new Error('HTMLImageElement is not supported.');
}
