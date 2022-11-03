import { User } from "./../constructor/user";
import { Activity } from "./../constructor/activity";
import {Performance} from "./../constructor/performance.js";

import {useEffect, useState} from "react";
import {useParams, useNavigate } from "react-router-dom";

import { getUser, getActivity, getPerformance, getAverageSessions } from "./../service/data_mock.js";
// import { getUser, getActivity, getPerformance, getAverageSessions } from "./../service/data.js";

/**
 * 
 * @returns TODO
 */
export default function useProfil() {
    const [user, setUser] = useState(new User)
    const [activity, setActivity] = useState([])
    const [averageSessions, setAverageSessions] = useState([{"day":0,"sessionLength":0}])
    const [performance, setPerformance] = useState(new Performance())

    let navigate = useNavigate()

    const { userId } = useParams();
    useEffect(() => {
        const getUserData = async () => {
            const request = await getUser(userId);
            if (!request) return navigate( '/404' );
            setUser(new User(request));
        };
        getUserData();
    }, []);

    useEffect(() => {
        const getActivityData = async () => {
            const request = await getActivity(userId);
            if (!request) return this.props.history.push('/404');
            let test = []
            request.map((e) => {
                test.push(new Activity(e))
            })
            console.log(test);
            setActivity(request);
        };
        getActivityData();
    }, []);

    useEffect(() => {
        const getAverageSessionsData = async () => {
            const request = await getAverageSessions(userId);
            if (!request) return this.props.history.push('/404');
            setAverageSessions(request);
        };
        getAverageSessionsData();
    }, []);

    useEffect(() => {
        const getPerformanceData = async () => {
            const request = await getPerformance(userId);
            if (!request) return this.props.history.push('/404');
            setPerformance(new Performance(request));
        };
        getPerformanceData();
    }, []);



    return [user, activity, performance, averageSessions]
}