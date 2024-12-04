import { useState } from "react";
import "./App.css";
import ChatHistory from "./components/chat/chat-history/Chathistory";
import AskInput from "./components/Input/ask-input/AskInput";

function App() {
    const [menssage, setMessage] = useState("");

    return (
        <div className="container">
            <div className="App">
                <ChatHistory></ChatHistory>
                <AskInput
                    value={menssage}
                    onChange={(event) => setMessage(event?.target.value)}
                    name="message"
                    label="Teste"
                    placeholder="Faça uma pegunta"
                ></AskInput>
            </div>
        </div>
    );
}

export default App;
