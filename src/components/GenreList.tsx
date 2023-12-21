import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  const genresSkeletons = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6];
  if (isLoading)
    return (
      <Stack>
        {genresSkeletons.map((g) => (
          <Skeleton height="42px" marginY="5px" />
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
