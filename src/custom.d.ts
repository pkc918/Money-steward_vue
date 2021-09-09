// 公共类型
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
}

type RootState = {
  localStorageRecordKeyName: string;
  localStorageTagKeyName: string;
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}

type Tag = {
  id: string;
  name: string;
}
// type TagListType = {
//   data: Tag[];
//   fetch: () => Tag[];
//   create: (name: string) => 'success' | 'duplicated';
//   remove: (id: string) => boolean;
//   update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
//   save: () => void;
// }

