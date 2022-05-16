import React, {useEffect, useState} from "react";
import {Datos} from "../interfaces/Data";
import {getData} from "../services/DataService";
import Items from "./Items";

const Data = () => {
    const [dataGo, setDataGo] = useState<Datos[]>([]);
    const loadData = async () => {
        const res = await getData();
        setDataGo(res.data);
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <>
            {dataGo.map((data) => {
                return <Items data={data} key={data.entity} />;
            })}
        </>
    );
};

export default Data;
