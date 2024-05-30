import { IVersionDto } from "../../../types/user-space.types";

export const getVersions = (versions: IVersionDto[]) => {
  const uniqueIds = [...new Set(versions.map(({ id }) => id))]
  const filteredVersions = versions.filter((_, idx) => versions[idx].id === uniqueIds[idx]);
  return filteredVersions.map((elem, idx) => ({ 
    key: idx + 1,
    label: elem.versionNumber,
    id: elem.id,
    description: elem.description,
    dateOfPublication: elem.dateOfPublication
  }));
}
  
