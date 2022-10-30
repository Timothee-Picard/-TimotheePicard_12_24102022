import "./bar_chart_tooltip.scss"
export default function Bar_chart_tooltip({active, payload}) {
    if(!active) return null
    return (
        <>
            <div className="bar_chart_tooltip">
                <p>{`${payload[0].payload.kilogram}kg`}</p>
                <p>{`${payload[0].payload.calories}Kcal`}</p>
            </div>
        </>
    )
}
