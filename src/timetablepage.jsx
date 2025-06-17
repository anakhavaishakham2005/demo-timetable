import React from "react";
import { useParams } from "react-router-dom";
import Table from "./table.jsx";

function TablePage() {
    const { subject } = useParams(); 
    return (
        <div>
            <Table subject={subject} /> 
        </div>
    );
}

export default TablePage;
