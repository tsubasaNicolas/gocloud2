import React from "react";

interface Props {
    texto: string;
    numero: number;
    color?: string;
    icon?: string;
}

const BoxInfo: React.FC<Props> = ({
    texto = "sin texto",
    numero = 1,
    color = "#2D2D2D",
    icon = "rocket"
}) => (
    <div
        style={{
            ...styles.contenedor,
            borderBottom: `5px solid ${color}`,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4
        }}
    >
        <span
            style={{
                ...styles.numero,
                color: color,
                fontWeight: "bold"
            }}
        >
            {numero}
        </span>
        <p style={{color: "grey"}}>{texto}</p>
        <img height={12} style={{marginBottom: 8}} src={icon} />
    </div>
);

const styles = {
    contenedor: {
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: 4
    },
    numero: {
        fontSize: 26
    }
};

export default BoxInfo;
