// import update from 'immutability-helper';

export const initialAsyncState = {
  loading: false,
  finished: true,
  error: null
};

export const initialState = {
  records: [],
  creating: initialAsyncState,
  updating: initialAsyncState,
  deleting: initialAsyncState
};

export function hydrate(oldRecords, records, primaryKey = 'id') {
  const newRecords = [];
  const replacedIds = [];

  // copy over old records, and update them if we need to.
  // this persists ordering so UI stuff doesn't move around
  oldRecords.forEach(oldRecord => {
    const existInNew = records.find(o => o[primaryKey] === oldRecord[primaryKey]);

    if (existInNew) {
      replacedIds.push(existInNew[primaryKey]);
      return newRecords.push(existInNew);
    }

    return newRecords.push(oldRecord);
  });

  // find the new records which haven't yet been added to the next state
  records.forEach(record => {
    if (!replacedIds.includes(record[primaryKey])) {
      newRecords.push(record);
    }
  });

  return newRecords;
}

export function removeFromState(records, id) {
  const newRecords = [];

  records.forEach(record => {
    if (record.id !== id) newRecords.push(record);
  });

  return newRecords;
}
