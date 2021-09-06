import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    localStorageRecordKeyName: 'recordList',
    localStorageTagKeyName: 'tagList',
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  mutations: {
    // records store
    fetchRecords(state) {
      return state.recordList = JSON.parse(window.localStorage.getItem(state.localStorageRecordKeyName) || '[]') as RecordItem[];
    },
    saveRecords(state) {
      window.localStorage.setItem(state.localStorageRecordKeyName, JSON.stringify(state.recordList));
    },
    createRecord(state, record: RecordItem) {
      const deepClone: RecordItem = clone(record);
      deepClone.createdAt = new Date();
      console.log(state.recordList);
      state.recordList?.push(deepClone);
      store.commit('saveRecords');
    },
    // tag store
    fetchTags(state) {
      return state.tagList = JSON.parse(window.localStorage.getItem(state.localStorageTagKeyName) || '[]');
    },
    findTag(state, id: string) {
      return state.tagList.filter(item => item.id === id)[0];
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签已经存在');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList?.push({id, name});
      store.commit('saveTags');
      window.alert('添加成功');
      return 'success';
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      state.tagList.splice(index, 1);
      store.commit('saveTags');
      return true;
    },
    saveTags(state) {
      window.localStorage.setItem(state.localStorageTagKeyName, JSON.stringify(state.tagList));
    }
  },
  actions: {},
  modules: {}
});

export default store;
