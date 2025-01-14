import { NextRouter, useRouter } from 'next/router'
import produce from 'immer'
import { Button, PageHeader } from 'antd'
import { EditOutlined } from '@ant-design/icons/lib'
import { convertQueryParamToArray } from '../utils/utils'
import { SlugVerb } from '../utils/types'
import { createSlugPathFromQueryAndRemoveSlug } from '../utils/slug'


const onBack = (router: NextRouter) => () => {
  const { query } = router
  const newQueryParams = produce(query, draftState => {
    const { slug } = draftState
    const slugArray = convertQueryParamToArray(slug)

    slugArray.splice(slugArray.length - 2, 2)
    draftState.slug = slugArray
  })

  const [newPath, newQueryWithoutSlug] = createSlugPathFromQueryAndRemoveSlug(newQueryParams)

  router.replace(
    {
      pathname: `/maps/${newPath}`,
      query: newQueryWithoutSlug,
    },
    undefined,
    { shallow: true },
  )
}

const onEdit = (router: NextRouter) => () => {
  const { query } = router
  const newQueryParams = produce(query, draftState => {
    const { slug } = draftState
    const slugArray = convertQueryParamToArray(slug)
    slugArray.push(SlugVerb.EDIT)

    draftState.slug = slugArray
  })

  const [newPath, newQueryWithoutSlug] = createSlugPathFromQueryAndRemoveSlug(newQueryParams)

  router.replace(
    {
      pathname: `/maps/${newPath}`,
      query: newQueryWithoutSlug,
    },
    undefined,
    { shallow: true },
  )
}


const EntityDetailHeader = () => {
  const router = useRouter()


  return (
    <PageHeader
      style={{
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 0,
        paddingBottom: 4,
      }}
      ghost={false}
      onBack={onBack(router)}
      extra={[
        <Button
          key="1"
          type="primary"
          size="small"
          icon={<EditOutlined/>}
          onClick={onEdit(router)}
        />,
      ]}
    />
  )
}


export default EntityDetailHeader