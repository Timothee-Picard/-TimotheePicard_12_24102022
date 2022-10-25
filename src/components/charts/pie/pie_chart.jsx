import {Cell, Label, Pie, PieChart, ResponsiveContainer} from "recharts";

export default function Pie_chart({data}) {
    const test = [
        { name: "done", value: data, fillColor: `red` },
        { name: "todo", value: 1 - data, fillColor: "transparent" },
    ];

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={160} height={160}>
                    <Pie
                        data={test}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                    >
                        {test.map((e, i) => (
                            <Cell
                                key={i}
                                fill={e.fillColor}
                                stroke=""
                                cornerRadius="50%"
                            />
                        ))}
                        <Label className="circle-label" fill={"black"} width={70} position="center">
                            { `${test[0].value * 100}% de votre objectif` }
                        </Label>
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}
