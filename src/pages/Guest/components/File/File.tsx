import {
  Space,
  Tag,
  Typography
} from 'antd';
import { IFile } from '../../types/file';

export const File = (props: IFile) => {
  const { Paragraph } = Typography;
  const { name, type } = props;
  return (
    <Space direction='horizontal' className='files'>
      <Space direction='horizontal' className='files-deep'>
        {/* <Tag className='a-tag'>{ tag.letter }</Tag> */}
        <Paragraph className='paragraph'>{ name }</Paragraph>
        <Paragraph className='paragraph'>{ type }</Paragraph>
      </Space>
    </Space>
  )
}
