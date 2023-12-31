import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}

interface GenresFetchResult {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClient
			.get<GenresFetchResult>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;
