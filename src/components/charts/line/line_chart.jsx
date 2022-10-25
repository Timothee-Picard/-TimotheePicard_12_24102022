import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

export default function Line_chart({data}) {
    return (
        <>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="day" tick={{stroke: 'white'}} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}
