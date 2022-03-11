import React from 'react';

const caseStudies = [
	{
		id: 1,
		subtitle: 'Exercises',
		title: 'The only bad workout is the one that didn’t happen',
		img: 'exer-img',
	},
	{
		id: 2,
		subtitle: 'Mindfulness',
		title: 'Meditation designed to benefit the mind, body, and soul',
		img: 'yoga-img',
	},
	{
		id: 3,
		subtitle: 'Nutrition',
		title: 'To eat is a necessity, but to eat intelligently is an art.',
		img: 'food-img',
	},
];

const Cases = () => {
	return (
		<section className="cases">
			<div className="container-fluid">
				<div className="row">
					{caseStudies.map((caseItem) => (
						<div className="case" key={caseItem.id}>
							<div className="case-details">
								<span>{caseItem.subtitle}</span>
								<h2>{caseItem.title}</h2>
							</div>
							<div className="case-image">
								<img
									src={require(`../../assets/${caseItem.img}.png`)}
									alt={caseItem.title}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Cases;
