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

        <p>Calories {user.keyData.calorieCount}</p>
        <p>Proteines {user.keyData.proteinCount}</p>
        <p>Lipides {user.keyData.lipidCount}</p>
        <p>Glucides {user.keyData.carbohydrateCount}</p>

      <BarChart
          width={800}
          height={250}
          data={activity}
      >
        <CartesianGrid strokeDasharray="10" />
        <XAxis dataKey="" />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>




        <LineChart
            width={500}
            height={300}
            data={averageSessions}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>



        <RadarChart width={500}
                    height={500}
                    cx={250}
                    cy={250}
                    outerRadius={150}
                    data={performance.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar name="Mike"
                   dataKey="value"
                   stroke="#8884d8"
                   fill="#8884d8"
                   fillOpacity={0.6} />
        </RadarChart>


    </>
  )
}
