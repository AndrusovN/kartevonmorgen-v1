import React, { FC, Fragment, useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import produce from 'immer'
import { convertQueryParamToArray, removeRoutingQueryParams, updateRoutingQuery } from '../utils/utils'
import TagsSelect from './TagsSelect'
import { createSlugPathFromQueryAndRemoveSlug } from '../utils/slug'


const searchTag = (router: NextRouter) => (tag: string) => {
  const { query } = router
  const { tag: optionalTagsFromQuery } = query
  const optionalTags = convertQueryParamToArray(optionalTagsFromQuery)

  const newQueryParams = updateRoutingQuery(query, { tag: [...optionalTags, tag] })
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


const removeAllTagsFromRouter = (router: NextRouter) => () => {
  const { query } = router
  const newQueryParams = removeRoutingQueryParams(query, ['tag'])
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


const removeTagFromRouter = (router: NextRouter) => (tagToRemove: string) => {
  const { query } = router
  const { tag: optoinalTagsFromQuery } = query
  const optionalTags = convertQueryParamToArray(optoinalTagsFromQuery)

  const newTagsParameter = produce(optionalTags, draft => {
    const indexOfTagToRemove = draft.indexOf(tagToRemove)
    if (indexOfTagToRemove !== -1) {
      draft.splice(indexOfTagToRemove, 1)
    }
  })

  const newQueryParams = updateRoutingQuery(query, { tag: newTagsParameter })
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


const SearchTags: FC = (_props) => {
  // the ant select uses useLayout internally and we need to be sure it's mounted on the browser
  const [showSelect, setShowSelect] = useState<boolean>(false)
  useEffect(() => {
    setShowSelect(true)
  }, [])

  const router = useRouter()

  return (
    <Fragment>
      {showSelect && (
        <div
          style={{
            marginTop: 8,
          }}
        >
          <TagsSelect
            placeholder="Search for tags"
            onSelect={searchTag(router)}
            onDeselect={removeTagFromRouter(router)}
            onClear={removeAllTagsFromRouter(router)}
          />
        </div>
      )}
    </Fragment>
  )
}

SearchTags.defaultProps = {
  optionsCount: [],
}

export default SearchTags