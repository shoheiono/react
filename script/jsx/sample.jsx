(function() {
	var CommentBox = React.createClass({
		render: function() {
			return (
				<div className="commentBox">
					Hello, world! I am a CommentBox....sdjosjdposkvd
				</div>
			);
		}
	});

	React.render(
		<CommentBox />,
		document.getElementById('content')
	);
})();
