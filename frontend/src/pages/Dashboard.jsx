// import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Card, CardBody, Flex, Stack, Text } from "@chakra-ui/react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { columnsFromBackend } from "../utilis/data";
import { useEffect } from "react";
import { BugCard } from "../components/BugCard";
export const Dashboard = () => {
  const [columns, setColumns] = useState(columnsFromBackend);
  // console.log(columns);
  const onDragEnd = (result, columns, setColumns) => {
    //if not placing in any of the container then simply return to its original place
    if (!result.destination) return;
    const { source, destination } = result;
    // console.log((source, destination));

    // if we dragging bug to another container
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      //removing from current container
      const [removed] = sourceItems.splice(source.index, 1);

      //adding it to destination container
      destItems.splice(destination.index, 0, removed);

      //setting state
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      //if dragging in same container
      const column = columns[source.droppableId];
      //copying item in new array without mutating original array
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  useEffect(() => {
    setColumns(columnsFromBackend);
  }, []);
  return (
    <Flex>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Flex border={"1px solid red"} key={columnId}>
              <Text>{column.name}</Text>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <Card
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      // padding: 16,
                                      // margin: "0 0 8px 0",
                                      // minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : column.bg,
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <BugCard name={item.name} />
                                  </Card>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </Flex>
          );
        })}
      </DragDropContext>
    </Flex>
  );
};
