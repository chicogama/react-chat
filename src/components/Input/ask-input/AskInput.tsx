import "./AskInput.css";

import { Textarea } from "@fluentui/react-components";

import { ChangeEventHandler } from "react";

interface AskInputProps {
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    placeholder: string;
}

function AskInput({ name, value, onChange, placeholder }: AskInputProps) {
    return (
        <div className="container">
            <form action="">
                <div className="ask-area">
                    <Textarea
                        appearance="outline"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default AskInput;
