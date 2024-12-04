// MyIcon.tsx
import { FluentIconsProps, bundleIcon, wrapIcon } from "@fluentui/react-icons";

export const MyOutlineIcon = wrapIcon((props: FluentIconsProps) => {
    return (
        <svg
            height="1rem"
            width="1rem"
            role="presentation"
            focusable="false"
            viewBox="2 2 16 16"
            {...props}
        >
            <g>
                <path d="..." />
            </g>
        </svg>
    );
}, "MyOutlineIcon");

export const MyFilledIcon = wrapIcon((props: FluentIconsProps) => {
    return (
        <svg
            height="1rem"
            width="1rem"
            role="presentation"
            focusable="false"
            viewBox="2 2 16 16"
            {...props}
        >
            <g>
                <path d="..." />
            </g>
        </svg>
    );
}, "MyFilledIcon");

export const MyIcon = bundleIcon(MyFilledIcon, MyOutlineIcon);
