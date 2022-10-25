import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";

export default function Radar_chart({data}) {
    return (
        <>
            <ResponsiveContainer>
                <RadarChart data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <Radar dataKey="value"
                           stroke="#FF0101B2"
                           fill="#FF0101B2"
                           fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}
