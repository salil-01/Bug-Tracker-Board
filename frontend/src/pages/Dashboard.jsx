// import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Card, Flex, HStack, Stack, Text, Tooltip } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { columnsFromBackend } from "../utilis/data";
import { useEffect } from "react";
import { BugCard } from "../components/BugCard";
import { AddModal } from "../components/AddModal";

export const Dashboard = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  //to add bugs
  const handleAdd = (objParams, idParams) => {
    // console.log(obj, id);
    let updatedState = {
      ...columns,
      [idParams]: {
        ...columns[idParams],
        items: [...columns[idParams]["items"], objParams],
      },
    };
    setColumns(updatedState);
  };

  //delete a bug
  const handleDelete = (columnIdParams, itemIdParams) => {
    //columnId and Item of specific card coming from card itself

    //filtering out only the card on which user has clicked delete icon
    let updatedState = {
      ...columns,
      [columnIdParams]: {
        ...columns[columnIdParams],
        items: columns[columnIdParams].items.filter(
          (el) => el.id !== itemIdParams
        ),
      },
    };
    // console.log(updatedState);
    //setting state with the updated value
    setColumns(updatedState);
  };

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
    <Flex width={"100%"} margin={" 40px auto"} justifyContent={"space-between"}>
      {/* context for drag and drop */}
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {/* making columns as per data from db */}
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Stack
              border={"1px solid"}
              key={columnId}
              flexDirection={"column"}
              gap={"10px"}
            >
              <HStack
                backgroundColor={column.bg}
                borderRadius={"5px"}
                padding={"5px"}
                color={column.bg === "yellow" ? "black" : "white"}
                justifyContent={"space-around"}
                alignItems={"center"}
              >
                <Text
                  fontSize={"1.1rem"}
                  fontWeight={"500"}
                  // color={column.bg}
                >
                  {column.name}
                </Text>

                <AddModal columnId={columnId} handleAdd={handleAdd} />
              </HStack>

              {/* droppable container where one can drop card after drag */}
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <Stack
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      minWidth={"200px"}
                      borderRadius={"8px"}
                      padding={"20px"}
                      minHeight={"70vh"}
                      boxShadow={"xl"}
                      gap={"0px"}
                      backgroundColor={
                        snapshot.isDraggingOver ? "lightgray" : "teal.100"
                      }
                    >
                      {column.items.map((item, index) => {
                        return (
                          // card that can be dragged by user
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
                                  backgroundColor={
                                    snapshot.isDragging ? "#263B4A" : column.bg
                                  }
                                  margin={"0px 0px 8px 0px"}
                                  style={{
                                    userSelect: "none",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  <BugCard
                                    name={item.name}
                                    color={column.bg}
                                    id={item.id}
                                    handleDelete={handleDelete}
                                    columnId={columnId}
                                  />
                                </Card>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </Stack>
                  );
                }}
              </Droppable>
            </Stack>
          );
        })}
      </DragDropContext>
    </Flex>
  );
};
