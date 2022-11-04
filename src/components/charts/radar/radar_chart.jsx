import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import PropTypes from 'prop-types';

/**
 * TODO:
 */
export default function Radar_chart({data}) {
    const trad = {
        cardio: "Cardio",
        energy: "Energie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité"
    }
    data && data.data && data.data.map((e)=> {
        if (!data.kind || !e.kind) return
        e.xAxe = trad[data.kind[e.kind]]
    })
    return (
        <>
            <ResponsiveContainer>
                <RadarChart data={data.data} margin={{right: 20,left:20}}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="xAxe" stroke="white"/>
                    <Radar dataKey="value"
                           stroke="#FF0101B2"
                           fill="#FF0101B2"
                           fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}

Radar_chart.propTypes = {
    data: PropTypes.object
}
