import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	name: string;
	id: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}
interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = (
	selectedGenre: Genre | null,
	selectedPlatform: Platform | null
) => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClient
			.get<FetchGamesResponse>("/games", {
				params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
				signal: controller.signal,
			})
			.then((res) => {
				setIsLoading(false);
				setGames(res.data.results);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, [selectedGenre, selectedPlatform]);

	return { games, error, isLoading };
};

export default useGames;
