import { PropsIcon } from "../../interfaces/Icono";

const Check = ({fill, width = "16px", height = "16px"}: PropsIcon) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            fill={fill}
            viewBox="0 0 448 512"
        >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
    );
};

export default Check;
