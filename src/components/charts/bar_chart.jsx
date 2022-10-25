import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip} from "recharts";

export default function Bar_chart({data}) {
    return (
        <>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid
                        strokeDasharray="5"
                        vertical={false} />
                    <Tooltip />
                    <Bar barSize={10} dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]}/>
                    <Bar barSize={10} dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}
