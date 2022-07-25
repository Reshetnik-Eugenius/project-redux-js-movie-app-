export const Setting = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 3,

	responsive: [
		{
			breakpoint: 2000,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 1900,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};