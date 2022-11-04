import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import PropTypes from 'prop-types';

/**
 * Display line chart
 */
export default function Line_chart({data}) {
    const xAxe = ["L","M","M","J","V","S","D"]
    data && data.map(( e, i )=> {
        e.xAxe = xAxe[i]
    })
    return (
        <>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="xAxe" tick={{stroke: 'white'}} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="black" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

Line_chart.propTypes = {
    data: PropTypes.array
}
