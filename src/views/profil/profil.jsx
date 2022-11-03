import "./profil.scss"
import {useEffect, useState} from "react";
import {useParams, useNavigate } from "react-router-dom";

import Bar_chart from "../../components/charts/bar/bar_chart.jsx";
import Line_chart from "../../components/charts/line/line_chart.jsx";
import Radar_chart from "../../components/charts/radar/radar_chart.jsx";
import Pie_chart from "../../components/charts/pie/pie_chart.jsx";

import icoCalories from "../../assets/icon-calories.svg"
import icoCarbs from "../../assets/icon-carbs.svg"
import icoFat from "../../assets/icon-fat.svg"
import icoProtein from "../../assets/icon-protein.svg"

import { getUser, getActivity, getPerformance, getAverageSessions } from "../../service/data_mock.js";
// import { getUser, getActivity, getPerformance, getAverageSessions } from "../../service/data.js";

import { User } from "../../constructor/user";
import { Activity } from "../../constructor/activity";
import {Performance} from "../../constructor/performance.js";

export default function Profil() {
    const [user, setUser] = useState(new User)
    const [activity, setActivity] = useState([])
    const [averageSessions, setAverageSessions] = useState([{"day":0,"sessionLength":0}])
    const [performance, setPerformance] = useState({data: [{"value":0,"kind":null}]})

    let navigate = useNavigate()

    const { userId } = useParams();
    useEffect(() => {
        const getUserData = async () => {
            const request = await getUser(userId);
            if (!request) return navigate( '/404' );
            setUser(new User(request));
        };
        getUserData();
    });

    useEffect(() => {
        const getActivityData = async () => {
            const request = await getActivity(userId);
            if (!request) return this.props.history.push('/404');
            // new Activity(request)
            setActivity(request);
        };
        getActivityData();
    });

    useEffect(() => {
        const getAverageSessionsData = async () => {
            const request = await getAverageSessions(userId);
            if (!request) return this.props.history.push('/404');
            setAverageSessions(request);
        };
        getAverageSessionsData();
    });

    useEffect(() => {
        const getPerformanceData = async () => {
            const request = await getPerformance(userId);
            if (!request) return this.props.history.push('/404');
            setPerformance(new Performance(request));
        };
        getPerformanceData();
    });
  return (
    <>
        <p className="hello">Bonjour <span>{user.userInfos.firstName}</span></p>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="profil-container">
            <div className="profil-container-main">
                <div className="profil-container-main-bar">
                    <div className="profil-container-main-bar-title">
                        <h3>Activité quotidienne</h3>
                        <div className="profil-container-main-bar-title-legend">
                            <span className="profil-container-main-bar-title-legend-weight">Poids (kg)</span>
                            <span className="profil-container-main-bar-title-legend-calories">Calories brûlées (kCal)</span>
                        </div>
                    </div>
                    <div className="profil-container-main-bar-diagramme">
                        <Bar_chart data={activity} />
                    </div>
                </div>
                <div className="profil-container-main-line">
                    <h3>Durée moyenne des sessions</h3>

                    <div className="profil-container-main-line-diagramme">
                        <Line_chart data={averageSessions} />
                    </div>
                </div>
                <div className="profil-container-main-radar">
                    <div className="profil-container-main-radar-diagramme">
                        <Radar_chart data={performance} />
                    </div>
                </div>
                <div className="profil-container-main-score">
                    <h3>Score</h3>
                    <div className="profil-container-main-score-diagramme">
                        <Pie_chart data={user.todayScore? user.todayScore : user.score} />
                    </div>
                </div>
            </div>
            <div className="profil-container-aside">
                <div className="profil-container-aside-stats">
                    <i>
                        <img src={icoCalories} />
                    </i>
                    <span>
                        {user.keyData.calorieCount}kCal
                        <p>Calories</p>
                    </span>
                </div>
                <div className="profil-container-aside-stats">
                    <i>
                        <img src={icoProtein} />
                    </i>
                    <span>
                        {user.keyData.calorieCount}g
                        <p>Proteines</p>
                    </span>
                </div>
                <div className="profil-container-aside-stats">
                    <i>
                        <img src={icoCarbs} />
                    </i>
                    <span>
                        {user.keyData.lipidCount}g
                        <p>Glucides</p>
                    </span>
                </div>
                <div className="profil-container-aside-stats">
                    <i>
                        <img src={icoFat} />
                    </i>
                    <span>
                        {user.keyData.carbohydrateCount}g
                        <p>Lipides</p>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}
