import "./line_chart_tooltip.scss"
import PropTypes from 'prop-types';

/**
 * Display line chart tooltip
 */
export default function Line_chart_tooltip({active, payload}) {
    if(!active) return null
    return (
        <>
            <div className="line_chart_tooltip">
                {payload[0].value} min
            </div>
        </>
    )
}


Line_chart_tooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}
