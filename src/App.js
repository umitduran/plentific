import React from "react";
import "./App.css";
import { ProsPage } from "./components/ProsPage/ProsPage";
import { StoreProvider } from "./context/Store";

function App() {
    return (
        <StoreProvider>
            <ProsPage />
        </StoreProvider>
    );
}

export default App;
