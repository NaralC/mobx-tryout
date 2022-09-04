import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

// Import these 2 to receiving components
import store from "../store";
import { observer } from "mobx-react";

function TodoAdd() {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        // MobX magic
        value={store.newTodo}
        onChange={(e) => (store.newTodo = e.target.value)}
      />
      <Button onClick={() => store.addToDo}>Add Todo</Button>
    </Grid>
  );
}

export default observer(TodoAdd);
