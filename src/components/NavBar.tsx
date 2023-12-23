import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwith from "./ColorModeSwith";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" />
			<SearchInput />
			<ColorModeSwith />
		</HStack>
	);
};

export default NavBar;
