import axios from 'axios';
import { TEAMSIGNUP, GET_TEAM, GET_ALL_TEAMS, GET_TEAM_MEMBERS, DELETE_TEAM_MEMBER, ADD_TEAM_MEMBER } from './actionTypes';

const initialState = {
    teamMembers: {},
    allTeams: {},
    team: [],
    error: false,
    redirect: false
};

export const teamSignup = (team_name, team_image, team_creation_date, id) => {
    let data = axios

        .post('/api/teamSignup', { team_name, team_image, team_creation_date, id })
        .then(res => res.data);
    return {
        type: TEAMSIGNUP,
        payload: data
    };
};

export const getAllTeams = () => {
    let data = axios.get('/api/allTeams').then(res => {
        console.log('getallteams data', res.data)
        return res.data
    });
    return {
        type: GET_ALL_TEAMS,
        payload: data
    };
};

export const getTeam = (id) => {
    let data = axios.get(`/api/teams/${id}`).then(res => {
        return res.data
    });
    return {
        type: GET_TEAM,
        payload: data
    };
};
export const getTeamMembers = (id) => {
    console.log('hit getteammembers', id);
    let data = axios.get(`/api/teamMembers/${id}`).then(res => {
        console.log(res.data);
        return res.data
    });
    return {
        type: GET_TEAM_MEMBERS,
        payload: data
    };
};

export function deleteTeamMember(userId, teamId) {
    console.log('deleteTeamMember in Reducer', userId, teamId)
    let data = axios.delete(`/api/deleteTeamMember/${userId}?teamId=${teamId}`)
        .then(res => res.data)
    console.log('res delete data', data)
    return {
        type: DELETE_TEAM_MEMBER,
        payload: data
    };
};

export function addTeamMember(userId, teamId) {
    console.log('team reducer', userId, teamId)
    let data = axios
        .put(`/api/addTeamMember`, { userId, teamId })
        .then(res => res.data);
    console.log(data)
    return {
        type: ADD_TEAM_MEMBER,
        payload: data
    };
};


export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case TEAMSIGNUP + '_FULFILLED':
            return { team: payload, redirect: false, error: false };
        case TEAMSIGNUP + '_REJECTED':
            return { ...state, error: payload };
        case GET_TEAM + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_TEAM + '_FULFILLED':
            return { ...state, team: payload, error: false };
        case GET_TEAM + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case GET_TEAM_MEMBERS + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_TEAM_MEMBERS + '_FULFILLED':
            return { ...state, teamMembers: payload, error: false };
        case GET_TEAM_MEMBERS + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case GET_ALL_TEAMS + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_ALL_TEAMS + '_FULFILLED':
            return { ...state, allTeams: payload, error: false };
        case GET_ALL_TEAMS + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case ADD_TEAM_MEMBER + '_FULFILLED':
            return { ...state, teamMembers: payload };
        case DELETE_TEAM_MEMBER + '_FULFILLED':
            return { ...state, teamMembers: payload };
        default:
            return state;
    }
}
