import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
             "main"`,
        lg: `"nav nav"
            "aside main"`,
      }}
    >
      <GridItem area="nav" bg="beige">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="pink">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="teal">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
