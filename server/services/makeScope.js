import { getRandomItemFromArray, getRandomDate } from '../utils/randomItems.js';

const scopeNames = ['IAS Perm', 'MKO', 'iMinec', 'iMinec_NPI', 'FOMS'];
const foldesNames = ['Windows Server', 'Linux', 'ОС Аврора', 'Android', 'iOS'];
const fileName = [
  'application_files_backend.zip',
  'application_files.zip',
  'documentation.zip',
  'разное.zip',
  'mobile_app.zip'
]

const makeFile = () => Array(2).fill({
    id: 1,
    name:	'',
    type:	'',
    tag: null
  }).map((file) => ({
    ...file,
    name: getRandomItemFromArray(fileName, 1)
  }))

const makeVersion = (versionAmmount) => Array(versionAmmount)
  .fill({
    id: 1,
    dateOfPublication: '',
    description: null,
    files: [],
    images: [],
    publish: false,
    showIllustration: false,
    versionNumber: '1.0',
    files: makeFile()
  })
  .map((version, idx) => ({
    ...version,
    id: idx + 1,
    versionNumber: `1.07.${idx + 1}`,
    description: `Описание версии 0.${idx + 1}`,
    dateOfPublication: getRandomDate(new Date(2022, 0, 1), new Date())
  }));

const makeFolders = (foldersNumber, versionAmmount) => Array(foldersNumber)
  .fill({
    id: 1,
    identifier: null,
    manifestForIOS: false,
    manifestForIOSFile: null,
    name: '',
    publish: false,
    versions: makeVersion(versionAmmount)
  })
  .map((folder, idx) => ({...folder, id: idx + 1, name: getRandomItemFromArray(foldesNames, idx)}));


export const makeScope = (id, foldersNumber, versionAmmount) => ({
  copyright: '(c) Parma TG, 2023',
  description: 'Обновлен сертификат, mobile-provision profile',
  distributionAgreement: null,
  icon: null,
  id,
  images: [],
  name: getRandomItemFromArray(scopeNames, 1),
  showIllustration: false,
  folders: makeFolders(foldersNumber, versionAmmount)
})