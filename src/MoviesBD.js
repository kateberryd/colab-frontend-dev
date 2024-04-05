import React, { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function MoviesDB() {
	const [movies, setMovies] = useState([
		{
			name: "Apex",
			img: "https://images.unsplash.com/photo-1605559911160-a3d95d213904",
			rating: 4.5,
			year: "2015",
		},

		{
			name: "Amina",
			img: "https://plus.unsplash.com/premium_photo-1682125157065-cbc4eb0fe0bb",
			rating: 4.5,
			year: "2020",
		},

		{
			name: "Avatar",
			img: "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae",
			rating: 5.0,
			year: "2024",
		},

		{
			name: "Joker",
			img: "https://images.unsplash.com/photo-1620510625142-b45cbb784397",
			rating: 4.5,
			year: "2012",
		},

		{
			name: "SpongBob",
			img: "https://images.unsplash.com/photo-1620510625142-b45cbb784397",
			rating: 4.5,
			year: "2012",
		},

		{
			name: "Cinderella",
			img: "https://images.unsplash.com/photo-1620510625142-b45cbb784397",
			rating: 4.5,
			year: "2012",
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	useEffect(() => {
		if (searchTerm.length > 0) {
			let filteredResult = movies.filter((movie) =>
				movie.name.toLowerCase().includes(searchTerm.toLowerCase())
			);

			setSearchResult(filteredResult);
		}
	}, [searchTerm]);

	console.log(searchResult);
	return (
		<div className="pt-10 pb-20">
			<h1 className="text-3xl font-extrabold text-center">Most Popular</h1>
			<p className="text-lg pt-2 text-center">My movies database</p>
			<div className="pt-5">
				<input
					className="w-full h-[56px] px-5 border-2 rounded-full outline-1 capitalize outline-blue-300"
					onChange={handleChange}
					placeholder="Search for any movie"
				/>
			</div>
			<div className="pt-10">
				{searchResult.length > 0 ? (
					<div className="grid grid-cols-3 h-auto  gap-10">
						{searchResult.map(({ name, img, rating, year }) => (
							<div className="">
								<div className="w-[200px] h-[250px] ">
									<img className="w-full h-full object-cover" src={img} />
								</div>

								<div className="pt-3">
									<p className="text-2xl font-bold">{name}</p>
									<div className="flex items-center gap-4 py-2 ">
										<p className="text-base font-semibold">{year}</p>
										<div className="w-3 h-3 rounded-full bg-gray-500" />
										<div className="flex items-center gap-1">
											<StarIcon className="w-4 h-4 text-yellow-500" />
											<p className="text-base font-medium">{rating}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : movies.length > 0 ? (
					<div className="grid grid-cols-3 h-auto  gap-10">
						{movies.map(({ name, img, rating, year }) => (
							<div className="">
								<div className="w-[200px] h-[250px] ">
									<img className="w-full h-full object-cover" src={img} />
								</div>

								<div className="pt-3">
									<p className="text-2xl font-bold">{name}</p>
									<div className="flex items-center gap-4 py-2 ">
										<p className="text-base font-semibold">{year}</p>
										<div className="w-3 h-3 rounded-full bg-gray-500" />
										<div className="flex items-center gap-1">
											<StarIcon className="w-4 h-4 text-yellow-500" />
											<p className="text-base font-medium">{rating}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div>
						<p className="font-semibold">
							There are no movies available in the Database...
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
export default MoviesDB;
