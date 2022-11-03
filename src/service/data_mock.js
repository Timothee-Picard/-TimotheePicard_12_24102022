import axios from "axios";

/**
 * Retrieve mooked user information
 * @param {string} id 
 * @returns {Object} 
 */
export const getUser = async (id) => {
    try {
        const response = await axios.get("./../../mookedDatas/user.json")
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

/**
 * Retrieve mooked activity data
 * @param {string} id 
 * @returns {object}
 */
export const getActivity = async (id) => {
    try {
        const response = await axios.get("./../../mookedDatas/activity.json")
        return response.data.data.sessions
    } catch (error) {
        console.error(error)
    }
}

/**
 * Retrieve mooked user performance data
 * @param {string} id 
 * @returns {object}
 */
export const getPerformance = async (id) => {
    try {
        const response = await axios.get("./../../mookedDatas/performance.json")
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

/**
 * Retrieve mooked user average sessions data
 * @param {string} id 
 * @returns {object}
 */
export const getAverageSessions = async (id) => {
    try {
        const response = await axios.get("./../../mookedDatas/averageSessions.json")
        return response.data.data.sessions
    } catch (error) {
        console.error(error)
    }
}
