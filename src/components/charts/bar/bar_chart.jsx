import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Bar_chart_tooltip from "./bar_chart_tooltip.jsx";

export default function Bar_chart({data}) {
    return (
        <>
            <ResponsiveContainer debounce={0.1} >
                <BarChart data={data}>
                    <CartesianGrid
                        strokeDasharray="5"
                        vertical={false} />
                    <XAxis
                        dataKey=""
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis orientation='right'
                           axisLine={false}
                           tickLine={false}
                           tickCount={4}
                    />
                    <Tooltip content={<Bar_chart_tooltip />}/>
                    <Bar barSize={7} dataKey="kilogram" fill="#282D30" radius={[20, 10, 0, 0]}/>
                    <Bar barSize={7} dataKey="calories" fill="#E60000" radius={[20, 10, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}
