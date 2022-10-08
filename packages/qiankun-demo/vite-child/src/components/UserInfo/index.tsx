import { useAppSelector } from '@/stores/storeHooks'
import { Descriptions } from 'antd'

function UserInfo() {
  const user = useAppSelector(state => state.user.user)
  return user && <Descriptions bordered title="来自主应用的数据 User Store Info">
    <Descriptions.Item label="UserName">{user.name}</Descriptions.Item>
    <Descriptions.Item label="Age">{user.age}</Descriptions.Item>
    <Descriptions.Item label="Gender">{user.gender}</Descriptions.Item>
    <Descriptions.Item label="Telephone">{user.phone}</Descriptions.Item>
  </Descriptions>
}

export default UserInfo
