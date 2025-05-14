"use client";

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { PlusCircle, X } from "lucide-react";
import { Input } from "./ui/input";

// This is needed for react-beautiful-dnd to work with React 19 & Next.js
const useDNDSafeEffect = (effect, deps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      effect();
    }, 0);

    return () => clearTimeout(timeout);
  }, deps);
};

const initialColumns = {
  todo: {
    id: "todo",
    title: "To Do",
    taskIds: ["task-1", "task-2"],
  },
  inprogress: {
    id: "inprogress",
    title: "In Progress",
    taskIds: ["task-3"],
  },
  done: {
    id: "done",
    title: "Done",
    taskIds: ["task-4"],
  },
};

const initialTasks = {
  "task-1": { id: "task-1", content: "Setup project structure" },
  "task-2": { id: "task-2", content: "Create wireframes" },
  "task-3": { id: "task-3", content: "Implement authentication" },
  "task-4": { id: "task-4", content: "Design landing page" },
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [addingTaskToColumn, setAddingTaskToColumn] = useState(null);
  const [enabled, setEnabled] = useState(false);

  // Enable drag and drop after mounting to prevent Next.js hydration issues
  useDNDSafeEffect(() => {
    setEnabled(true);
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If there's no destination or the item was dropped in the same place
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    if (sourceColumn === destColumn) {
      // Reordering within the same column
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      // Moving from one column to another
      const sourceTaskIds = Array.from(sourceColumn.taskIds);
      sourceTaskIds.splice(source.index, 1);

      const destTaskIds = Array.from(destColumn.taskIds);
      destTaskIds.splice(destination.index, 0, draggableId);

      setColumns({
        ...columns,
        [sourceColumn.id]: {
          ...sourceColumn,
          taskIds: sourceTaskIds,
        },
        [destColumn.id]: {
          ...destColumn,
          taskIds: destTaskIds,
        },
      });
    }
  };

  const addNewTask = (columnId) => {
    if (!newTaskText.trim()) return;

    const newTaskId = `task-${Date.now()}`;
    const newTask = {
      id: newTaskId,
      content: newTaskText,
    };

    const column = columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.push(newTaskId);

    setTasks({
      ...tasks,
      [newTaskId]: newTask,
    });

    setColumns({
      ...columns,
      [columnId]: {
        ...column,
        taskIds: newTaskIds,
      },
    });

    setNewTaskText("");
    setAddingTaskToColumn(null);
  };

  const deleteTask = (taskId, columnId) => {
    const column = columns[columnId];
    const newTaskIds = column.taskIds.filter((id) => id !== taskId);

    const newColumns = {
      ...columns,
      [columnId]: {
        ...column,
        taskIds: newTaskIds,
      },
    };

    const newTasks = { ...tasks };
    delete newTasks[taskId];

    setColumns(newColumns);
    setTasks(newTasks);
  };

  // Don't render the drag and drop interface until after mounting
  if (!enabled) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Project Board</h2>
        <p>Loading board...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Project Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.values(columns).map((column) => (
            <div key={column.id} className="flex flex-col">
              <Card className="mb-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{column.title}</CardTitle>
                </CardHeader>
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <CardContent
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-[300px]"
                    >
                      {column.taskIds.map((taskId, index) => (
                        <Draggable
                          key={taskId}
                          draggableId={taskId}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="p-3 mb-2 bg-gray-800 rounded-md flex justify-between items-center"
                            >
                              <span>{tasks[taskId].content}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => deleteTask(taskId, column.id)}
                              >
                                <X size={16} />
                              </Button>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}

                      {addingTaskToColumn === column.id ? (
                        <div className="mt-2">
                          <Input
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            placeholder="Enter task text"
                            className="mb-2"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                addNewTask(column.id);
                              }
                            }}
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => addNewTask(column.id)}
                            >
                              Add
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setNewTaskText("");
                                setAddingTaskToColumn(null);
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-2"
                          onClick={() => setAddingTaskToColumn(column.id)}
                        >
                          <PlusCircle size={16} className="mr-1" /> Add Task
                        </Button>
                      )}
                    </CardContent>
                  )}
                </Droppable>
              </Card>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
