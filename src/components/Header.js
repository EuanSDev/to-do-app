import PropTypes from 'prop-types'

const Header = ({ title }) => {
	return (
		<header className=''>
			<div className="logo">
				<h1>{ title }</h1>
			</div>
		</header>
	)
};

Header.defaultProps = {
	title: 'To Do App'
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export default Header;
