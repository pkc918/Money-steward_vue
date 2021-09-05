import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

export const store = {
  /*
* 1 全局变量太多
* 2 严重依赖 window
* */
  // record store
  recordList : recordListModel.fetch(),
  createRecord :(record: RecordItem) => {
    return recordListModel.create(record)
  },

  // tag store
  tagList : tagListModel.fetch(),
  findTag (id: string){
    return this.tagList.filter(item => item.id === id)[0];
  },
  createTag : (name: string) => {
    const messageObj = {
      duplicated: () => {window.alert('标签已经存在');},
      success: () => {window.alert('添加成功');}
    };
    const message = tagListModel.create(name);
    messageObj[message]?.();
  },
  removeTag : (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag : (id: string, name: string) => {
    return tagListModel.update(id, name);

  },
}
