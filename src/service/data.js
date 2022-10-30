import axios from "axios";

/**
 * 
 * @param {string} id 
 * @returns {Object} 
 */
export const getUser = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`)
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

/**
 * 
 * @param {string} id 
 * @returns {object}
 */
export const getActivity = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/activity`)
        return response.data.data.sessions
    } catch (error) {
        console.error(error)
    }
}

/**
 * 
 * @param {string} id 
 * @returns {object}
 */
export const getPerformance = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/performance`)
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

/**
 * 
 * @param {string} id 
 * @returns {object}
 */
export const getAverageSessions = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        return response.data.data.sessions
    } catch (error) {
        console.error(error)
    }
}
