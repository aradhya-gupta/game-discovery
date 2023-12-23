import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton marginX={3} as={Button} rightIcon={<BsChevronDown />}>
				Order by: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem></MenuItem>
				<MenuItem></MenuItem>
				<MenuItem></MenuItem>
				<MenuItem></MenuItem>
				<MenuItem></MenuItem>
				<MenuItem></MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
