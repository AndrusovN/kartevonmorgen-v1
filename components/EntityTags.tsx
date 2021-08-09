import React, { FC, Fragment } from 'react'
import { TagArray } from '../dtos/Tag'
import { Divider, Space, Tag } from 'antd'
import useTranslation from 'next-translate/useTranslation'


interface EntryTagsProps {
  tags: TagArray
}

const EntityTags: FC<EntryTagsProps> = (props) => {
  const { tags } = props
const {t} = useTranslation('map')

  return (
    <Fragment>
      <Divider>{t('ratingForm.tags')}</Divider>
      <Space
        size="small"
        wrap
      >
        {
          tags.map((t) => (<Tag key={t}>{t}</Tag>))
        }
      </Space>
    </Fragment>
  )
}

export default EntityTags