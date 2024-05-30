import { getRandomItemFromArray } from '../utils/randomItems.js';

const scopeNames = ['IAS Perm', 'MKO', 'iMinec', 'iMinec_NPI', 'FOMS'];
const foldesNames = ['Windows Server', 'Linux', 'ОС Аврора', 'Android', 'iOS'];

export const makeTree = (scopeNumber, folderNumber, versionNumber) => {
  
  const makeFolders = (folderNumber, scopeKey) => {
    return Array(folderNumber)
      .fill({
        title: "IASPerry",
        key: "",
        children: []
      })
      .map((el, idx) => ({
        ...el,
        title: getRandomItemFromArray(foldesNames, 1),
        key: `${scopeKey}-${idx}`,
        children: makeVersions(versionNumber, `${scopeKey}-${idx}`)
      }));
  };

  const makeVersions = (versionNumber, folderKey) => {
    return Array(versionNumber)
      .fill({
        title: "IASPerry",
        key: ""
      })
      .map((el, idx) => ({
        ...el,
        key: `${folderKey}-${idx}`,
      }));
  };

  return Array(scopeNumber)
    .fill({
      title: "",
      key: "",
      children: []
    })
    .map((el, idx) => ({
      ...el,
      title: getRandomItemFromArray(scopeNames, 1),
      key: `0-${idx}`,
      children: makeFolders(folderNumber, `0-${idx}`)
    }));
};
