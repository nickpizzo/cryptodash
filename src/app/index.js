import React from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "../settings";
import Content from "../shared/Content";
import Dashboard from "../dashboard";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
