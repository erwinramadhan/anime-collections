export const setCollections = (data: any, storage: Storage) => {
  const dataJSON = JSON.stringify(data);
  storage.setItem('collections', dataJSON);
}

export const getCollections = (storage: Storage) => {
  const retrievedDataJSON = storage.getItem('collections');

  if (retrievedDataJSON) {
    const retrievedData = JSON.parse(retrievedDataJSON ?? '');
    return retrievedData
  }
  
  return []
}