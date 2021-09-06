import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex);

type RootState = {
  localStorageRecordKeyName: string;
  localStorageTagKeyName: string;
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
const store = new Vuex.Store({
  state: {
    localStorageRecordKeyName: 'recordList',
    localStorageTagKeyName: 'tagList',
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
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
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(item => item.id === id)[0];
    },
    updateTag(state, payload: { id: string; name: string }) {
      const {id, name} = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复了');
          return 'duplicated';
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
          return 'success';
        }
      } else {
        return 'not found';
      }
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
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back();
      } else {
        window.alert('删除成功');
      }
    },
    saveTags(state) {
      window.localStorage.setItem(state.localStorageTagKeyName, JSON.stringify(state.tagList));
    }
  },
  actions: {},
  modules: {}
});

export default store;
