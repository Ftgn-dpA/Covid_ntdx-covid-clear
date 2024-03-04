const state = {
    device: {
        width: 0,
        height: 0,
    }
}

const mutations = {
    SET_DEVICE_SIZE: (state, device) => {
        state.device = device;
    }
};

const actions = {
    setDeviceSize({ commit }, device) {
        commit('SET_DEVICE_SIZE', device)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};