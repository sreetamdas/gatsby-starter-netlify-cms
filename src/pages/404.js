import React from 'react'

const loader_styles = {
	fontSize: "15vh",
};
const NotFoundPage = () => (
	<div className="full-page">
		<h1 className="vertical-center black-text header-font" style={loader_styles}>
			Error 404!
			<br />
			<span style={{ fontSize: "6vh" }}>
				The page you are looking for does not exist :(
			</span>
		</h1>
	</div>
);

export default NotFoundPage
