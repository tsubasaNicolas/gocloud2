import React from "react";
import BoxInfo from "../components/BoxInfo";
import gcLogo from "../assets/gc-logo-white.svg";
import downArrow from "../assets/icons/gc-icon_down-arrow.svg";
import dialog from "../assets/icons/gc-icon_dialog.svg";
import check from "../assets/icons/gc-icon_check.svg";
import waiting from "../assets/icons/gc-icon_waiting.svg";
import phone from "../assets/icons/gc-icon_phone.svg";
import close from "../assets/icons/gc-icon_close.svg";
import time from "../assets/icons/gc-icon_time.svg";
import Table from "components/Table";

const Details: React.FC = () => (
    <>
        <div style={{width: `·"50px"`, background: "linear-gradient(to right, #427FE9, #8B3DDE)"}}>
            <img height={33} style={{marginTop: 4, marginLeft: 10}} src={gcLogo} />
        </div>
        <div style={{height: 18, background: "#F2E9F1"}}></div>

        <div style={{margin: 20}}>
            <h6 style={{color: "#F463A0"}}>Detalle de campaña</h6>
            <div
                style={{
                    height: 18,
                    background: "#009ADC",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 5
                }}
            >
                <p style={{color: "white", marginLeft: 14, fontSize: 10}}>Nombre de la campaña</p>
                <div style={{display: "flex", flexDirection: "row", marginRight: 20}}>
                    <p style={{color: "white", fontSize: 10, fontWeight: "bold"}}>
                        Progreso discado:
                        <span style={{marginRight: 20, fontWeight: "lighter"}}> 73%</span>
                    </p>
                    <p style={{color: "white", fontSize: 10, fontWeight: "bold"}}>
                        Consumo total:{" "}
                        <span style={{marginRight: 20, fontWeight: "lighter"}}> 02:07 min</span>
                    </p>
                    <p style={{color: "white", fontSize: 10, fontWeight: "bold"}}>
                        Duración promedio llamada:{" "}
                        <span style={{marginRight: 20, fontWeight: "lighter"}}> 24seg</span>
                    </p>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <BoxInfo texto="Transferidas" color="#059aea" numero={36} icon={downArrow} />
                <BoxInfo texto="Iniciadas" color="#04c6c0" numero={3728} icon={dialog} />
                <BoxInfo texto="Discadas" color="#8352e9" numero={11712} icon={check} />
                <BoxInfo texto="No iniciadas" color="#faa102" numero={7984} icon={waiting} />
                <BoxInfo texto="Números" color="#039ad9" numero={11712} icon={phone} />
                <BoxInfo texto="Fallidos" color="#c91b32" numero={10} icon={close} />
                <BoxInfo texto="Compromiso Pago" color="#f80c78" numero={14} icon={time} />
            </div>
            <Table />
        </div>
    </>
);

export default Details;
