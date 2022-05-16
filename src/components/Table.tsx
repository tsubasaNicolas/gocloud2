import React from "react";
import Data from "./Data";

const Table = () => {
    return (
        <div>
            <table style={styles.tabla}>
                <thead style={{...styles.thead, textAlign: "center"}}>
                    <th style={styles.th}>TELÉFONO</th>
                    <th style={styles.th}>FECHA</th>
                    <th style={styles.th}>HORA</th>
                    <th style={styles.th}>DURACIÓN</th>
                    <th style={styles.th}>ÚLT.ETAPA</th>
                    <th style={{width: "10%"}}>ÚLT.PASO</th>
                    <th style={styles.th}>INTENTOS</th>
                </thead>
                <Data />
            </table>
        </div>
    );
};
const styles = {
    tabla: {
        width: "100%",
        marginTop: 16
    },
    thead: {
        backgroundColor: "#b9bee6",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        borderRadius: 5
    },
    th: {
        width: "15%"
    }
};

export default Table;
