import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwith from "./ColorModeSwith";
import SearchInput from "./SearchInput";

interface Props {
	searchString: string;
	onSearch: (s: string) => void;
}

const NavBar = ({ searchString, onSearch }: Props) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" />
			<SearchInput searchString={searchString} onSearch={onSearch} />
			<ColorModeSwith />
		</HStack>
	);
};

export default NavBar;
