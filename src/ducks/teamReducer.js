import axios from 'axios';
import { TEAMSIGNUP, GET_TEAM, GET_ALL_TEAMS, GET_TEAM_MEMBERS, DELETE_TEAM_MEMBER } from './actionTypes';

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
        .then(console.log('teamsignup fired'));
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
}

export const getTeam = (id) => {
    let data = axios.get(`/api/teams/${id}`).then(res => {
        console.log(res.data);
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

export const deleteTeamMember = (id) => {
    let data = axios.delete(`/api/deleteTeamMember/${id}`)
    return{ 
        type: DELETE_TEAM_MEMBER,
        payload: data
     }
}

export default function (state = initialState, action) {
    console.log('action in TEAMReducer ', action);
    let { type, payload } = action;
    switch (type) {
        case TEAMSIGNUP + '_FULFILLED':
            console.log('Team payload', payload)
            return { team: payload, redirect: false, error: false };
        case TEAMSIGNUP + '_REJECTED':
            return { ...state, error: payload };
        case GET_TEAM + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_TEAM + '_FULFILLED':
            console.log('hit fulfilled gettean')
            return { ...state, team: payload, error: false };
        case GET_TEAM + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case GET_TEAM_MEMBERS + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_TEAM_MEMBERS + '_FULFILLED':
            console.log('hit fulfilled', payload)
            return { ...state, teamMembers: payload, error: false };
        case GET_TEAM_MEMBERS + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case GET_ALL_TEAMS + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_ALL_TEAMS + '_FULFILLED':
            console.log('hit fulfilled', payload)
            return { ...state, allTeams: payload, error: false };
        case GET_ALL_TEAMS + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        default:
            return state;
    }
}
