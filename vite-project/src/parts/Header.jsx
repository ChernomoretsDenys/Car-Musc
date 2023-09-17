export default function Header() {
	const burgerVar = document.querySelector('.header--burger');
	const headerUl = document.querySelector('.header--ul');
	const header = document.querySelector('.header');
	const headerNav = document.querySelector('.header--nav');
	const headerMain = document.querySelector('.header--main');


	function burger() {
		if (window.innerWidth <= 440) {
			burgerVar.classList.toggle('active');
			headerUl.classList.toggle('active');
			header.classList.toggle('active');
			headerNav.classList.toggle('active');
			headerMain.classList.toggle('active');
		} else {
			burgerVar.classList.remove('active');
			headerUl.classList.remove('active');
			header.classList.remove('active');
		} 
	}
	window.addEventListener('resize', () => { 
		burgerVar.classList.remove('active');
		headerUl.classList.remove('active'); 
		header.classList.remove('active');
	});
	return (
		<header className='header'> 
			<div className='container'>
				<div className='header--block'>
					<div className='header--nav'>
						<div className='header--items'>
							<ul className='header--ul'>
								<li className='header--item'><a href="#" className="header--link">Main</a></li>
								<li className='header--item'><a href="#" className="header--link">Car wrapping</a></li>
								<li className='header--item'><a href="#" className="header--link">Car detailing</a></li>
								<li className='header--item'><a href="#" className="header--link">Gallery of works</a></li>
							</ul>
						</div>
						<div className="header--burger" onClick={burger}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className='header--main'>
						<div className='header--title'>CAR MUSC</div>
						<div className="squares">
							<svg width="147" viewBox="0 0 147 16" fill="none">
								<rect y="8" width="10" height="10" transform="rotate(-45 0 8)" fill="#DB3138" />
								<rect x="44.071" y="8" width="10" height="10" transform="rotate(-45 44.071 8)" fill="#DB3138" />
								<rect x="88.1421" y="8" width="10" height="10" transform="rotate(-45 88.1421 8)" fill="#DB3138" />
								<rect x="132.213" y="8" width="10" height="10" transform="rotate(-45 132.213 8)" fill="#DB3138" />
							</svg>
						</div>
						<div className="header--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</div>
						<a href="#" className="button-fill"><span className="button-fill--text">our services</span></a>
					</div>
				</div>
			</div>
		</header>
	)
}