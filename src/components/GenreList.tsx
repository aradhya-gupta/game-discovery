import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Skeleton,
	Stack,
	Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ onSelectGenre }: Props) => {
	const { genres, isLoading, error } = useGenres();
	const genresSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	if (isLoading)
		return (
			<Stack>
				{genresSkeletons.map((g) => (
					<Skeleton key={g} height="42px" marginY="5px" />
				))}
			</Stack>
		);
	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button variant="link" onClick={() => onSelectGenre(genre)}>
							<Text fontSize="lg">{genre.name}</Text>
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};
