import { User } from "./../constructor/user";
import { Activity } from "./../constructor/activity";
import {Performance} from "./../constructor/performance.js";
import {AverageSessions} from "../constructor/averagesession.js";

import {useEffect, useState} from "react";
import {useParams, useNavigate } from "react-router-dom";

import { getUser, getActivity, getPerformance, getAverageSessions } from "./../service/data_mock.js";
// import { getUser, getActivity, getPerformance, getAverageSessions } from "./../service/data.js";

/**
 * TODO:
 * @returns (User|Activity[]|Performance|AverageSessions[])[]
 */
export default function useProfil() {
    const [user, setUser] = useState(new User)
    const [activity, setActivity] = useState([new Activity()])
    const [performance, setPerformance] = useState(new Performance())
    const [averageSessions, setAverageSessions] = useState([new AverageSessions()])

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
            let requestFormatted = []
            request.map((e) => {
                requestFormatted.push(new Activity(e))
            })
            setActivity(requestFormatted);
        };
        getActivityData();
    }, []);

    useEffect(() => {
        const getPerformanceData = async () => {
            const request = await getPerformance(userId);
            if (!request) return this.props.history.push('/404');
            setPerformance(new Performance(request));
        };
        getPerformanceData();
    }, []);

    useEffect(() => {
        const getAverageSessionsData = async () => {
            const request = await getAverageSessions(userId);
            if (!request) return this.props.history.push('/404');
            let requestFormatted = []
            request.map((e) => {
                requestFormatted.push(new AverageSessions(e))
            })
            setAverageSessions(requestFormatted);
        };
        getAverageSessionsData();
    }, []);

    return [user, activity, performance, averageSessions]
}
