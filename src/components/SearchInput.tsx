import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
	searchString: string;
	onSearch: (s: string) => void;
}

const SearchInput = ({ searchString, onSearch }: Props) => {
	return (
		<InputGroup>
			<InputLeftElement children={<BsSearch />} />
			<Input
				value={searchString}
				onChange={(e) => onSearch(e.target.value)}
				borderRadius={20}
				placeholder="Search games..."
				variant="filled"
			/>
		</InputGroup>
	);
};

export default SearchInput;
