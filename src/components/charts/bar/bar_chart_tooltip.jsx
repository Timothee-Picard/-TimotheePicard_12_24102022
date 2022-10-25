import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip} from "recharts";

export default function Bar_chart_tooltip({active, payload}) {
    if(!active) return null
    return (
        <>
            <div>
                <p>{`${payload[0].payload.kilogram}12kg`}</p>
                <p>{`${payload[0].payload.calories}kCal`}</p>
            </div>
        </>
    )
}
