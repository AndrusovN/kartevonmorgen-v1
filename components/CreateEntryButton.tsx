import  { FC } from 'react'
import { onAddEntity } from './AddEntryButton'
import { Button } from 'antd'
import { useRouter } from 'next/router'

const CreateEntryButton: FC = () => {
  const router = useRouter()
  return (
    <>
      <Button onClick={onAddEntity(router)}>
        Добавить запись
      </Button>
    </>
  )
}