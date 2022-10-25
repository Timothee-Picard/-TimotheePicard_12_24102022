import {Cell, Pie, PieChart, ResponsiveContainer} from "recharts";

export default function Pie_chart({data}) {
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={160} height={160}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                    >
                        {data.map((e, i) => (
                            <Cell
                                key={i}
                                fill={e.fillColor}
                                cornerRadius="50%"
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}
