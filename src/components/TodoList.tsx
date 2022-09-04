import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

// Import these 2 to receiving components
import store from "../store";
import { observer } from "mobx-react";

const TodoListItems = () => {
  return (
    <>
      {store.todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox />
          <Input mx={2} value={todo.text} />
          <Button>Delete</Button>
        </Flex>
      ))}
    </>
  );
};

const TodoListObserver = observer(TodoListItems);

const TodoList = () => {
  return (
    <>
      <Heading>Todo List</Heading>
      {/* Wrap the component under observer */}
      <TodoListObserver />
    </>
  );
};

export default TodoList;
