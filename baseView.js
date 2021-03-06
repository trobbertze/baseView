BaseView = function(options) {
	var Surface      = require('famous/core/Surface');
	var Modifier     = require('famous/core/Modifier');
	var Transform    = require('famous/core/Transform');
	var View         = require('famous/core/View');
	var RenderNode   = require('famous/core/RenderNode');
	var Transitionable   = require('famous/transitions/Transitionable');
	require('famous/inputs/FastClick');
	// ---------------------------------------------------------------------------
	function _BaseView(options) {
		View.apply(this, arguments);

		this.backing = new Surface({
			size: [undefined, undefined],
			content: options.content,
			properties: {
				color: "#000",
				padding: "2em"
			}
		});

		this.hingeTransitionable = new Transitionable(-Math.PI / 2);
		this.hinge = new Modifier();
		this.hinge.transformFrom(function() {
			return Transform.rotateY(this.hingeTransitionable.get());
		}.bind(this));

		this.layout = new RenderNode();
		this.layout.add(
			new Modifier(
				{
					transform: Transform.translate(0, 0, -1)
				}
			)
		).add(this.backing);

		this.add(this.backing);
	}
	// ---------------------------------------------------------------------------
	_BaseView.prototype = Object.create(View.prototype);
	_BaseView.prototype.constructor = _BaseView;

	return new _BaseView(options);
};
