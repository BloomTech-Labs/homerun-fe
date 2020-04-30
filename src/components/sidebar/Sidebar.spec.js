import React, { useState } from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import Sidebar from "./Sidebar";

test("loads", async () => {
  const [opened, setOpened] = useState(false);
  // Arrange
  const { container, asFragment } = render(
    <Sidebar opened={opened} setOpened={setOpened} />
  );
  // Act
  // Assert
});
