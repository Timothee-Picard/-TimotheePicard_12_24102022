import axios from "axios";

export const getUser = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

export const getActivity = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/activity`)
        return response.data.data.sessions
    } catch (error) {
        console.error(error)
    }
}

export const getPerformance = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/performance`)
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

export const getAverageSessions = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        return response.data.data.sessions
    } catch (error) {
        console.error(error)
    }
}
