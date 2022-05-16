import React from "react";
import {Datos} from "../interfaces/Data";

interface Props {
    data: Datos;
}
const Items = ({data}: Props) => {
    return (
        <tbody>
            <tr
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center"
                }}
            >
                <td style={styles.td}>{data.entity}</td>
                <td style={styles.td}>
                    {data.date.slice(0, 2)}/<span>0</span>
                    {data.date.slice(3, 4)}/<span>2019</span>
                </td>
                <td style={styles.td}>
                    {data.date.slice(0, 2)}:{data.date.slice(4, 6)}
                    <span>pm</span>
                </td>
                <td style={styles.td}>{data.date.slice(-2)}seg</td>
                <td style={styles.td}>No iniciada</td>
                <td style={{width: "10%", color: "grey", marginTop: 20}}>{data.step}</td>
                <td style={styles.td}>{data.status}</td>
            </tr>
        </tbody>
    );
};

const styles = {
    td: {
        width: "15%",
        color: "grey",
        marginTop: 20
    }
};

export default Items;
