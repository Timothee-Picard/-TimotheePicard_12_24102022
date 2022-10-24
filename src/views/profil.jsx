import {useEffect, useState} from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart, Line, LineChart
} from 'recharts';
import { getUser, getActivity, getPerformance, getAverageSessions } from "../service/data.js";
import {useParams} from "react-router-dom";

export default function Profil() {
    const [user, setUser] = useState({userInfos: {age: null, firstname: null, lastname: null},todayScore:0, keyData:{calorieCount:0, proteinCount:0, carbohydrateCount:0, lipidCount:0}})
    const [activity, setActivity] = useState("")
    const [averageSessions, setAverageSessions] = useState([{"day":0,"sessionLength":0}])
    const [performance, setPerformance] = useState({data: [{"value":0,"kind":null}]})

    const { userId } = useParams();

    useEffect(() => {
        const getUserData = async () => {
            const request = await getUser(userId);
            if (!request) return alert('go to page 404');
            setUser(request);
        };
        getUserData();
    });

    useEffect(() => {
        const getActivityData = async () => {
            const request = await getActivity(userId);
            if (!request) return alert('go to page 404');
            setActivity(request);
        };
        getActivityData();
    });

    useEffect(() => {
        const getAverageSessionsData = async () => {
            const request = await getAverageSessions(userId);
            if (!request) return alert('go to page 404');
            setAverageSessions(request);
        };
        getAverageSessionsData();
    });

    useEffect(() => {
        const getPerformanceData = async () => {
            const request = await getPerformance(userId);
            if (!request) return alert('go to page 404');
            setPerformance(request);
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
                            <span>Poids (kg)</span>
                            <span>Calories brûlées (kCal)</span>
                        </div>
                    </div>
                    <div className="profil-container-main-bar-diagramme">
                        <ResponsiveContainer>
                            <BarChart data={activity}>
                                <CartesianGrid
                                    strokeDasharray="5" 
                                    vertical={false} />
                                <Tooltip />
                                <Bar barSize={10} dataKey="kilogram" fill="#282D30" />
                                <Bar barSize={10} dataKey="calories" fill="#E60000" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="profil-container-main-line">
                    <ResponsiveContainer>
                        <LineChart data={averageSessions}>
                            <XAxis dataKey="day" tick={{stroke: 'white'}} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="profil-container-main-radar">
                    <ResponsiveContainer>
                        <RadarChart data={performance.data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="kind" />
                            <Radar dataKey="value"
                                stroke="#FF0101B2"
                                fill="#FF0101B2"
                                fillOpacity={0.7} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className="profil-container-main-score">
                    AAAAAAAAAAAAAAAA
                </div>
            </div>
            <div className="profil-container-aside">
                <div className="profil-container-aside-stats">
                    <i>1</i>
                    <span>
                        {user.keyData.calorieCount}kCal
                        <p>Calories</p>
                    </span>
                </div>
                <div className="profil-container-aside-stats">
                    <i>1</i>
                    <span>
                        {user.keyData.calorieCount}g
                        <p>Proteines</p>
                    </span>
                </div>
                <div className="profil-container-aside-stats">
                    <i>1</i>
                    <span>
                        {user.keyData.lipidCount}g
                        <p>Glucides</p>
                    </span>
                </div>
                <div className="profil-container-aside-stats">
                    <i>1</i>
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
