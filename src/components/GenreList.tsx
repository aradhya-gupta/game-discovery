import {
	Button,
	HStack,
	Heading,
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
	selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { genres, isLoading} = useGenres();
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
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{genres.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button variant="link" onClick={() => onSelectGenre(genre)}>
								<Text
									noOfLines={1}
									fontWeight={
										selectedGenre?.id === genre.id ? "bold" : "normal"
									}
									fontSize="lg"
								>
									{genre.name}
								</Text>
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};
