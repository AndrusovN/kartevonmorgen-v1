import React, { FC } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import { Divider, Spin, Tag, Typography } from 'antd'
import Event, { EventID } from '../dtos/Event'
import EntityImage from './EntityImage'
import EntityFooter from './EntityFooter'
import EntityDetailHeader from './EntityDetailHeader'
import EntityContact from './EntityContact'
import EntityAddress from './EntityAddress'
import EntityTags from './EntityTags'
import API_ENDPOINTS from '../api/endpoints'
import useRequest from '../api/useRequest'
import { RootSlugEntity } from '../utils/types'

const { Title, Paragraph, Text } = Typography


interface EventDetailProps {
  eventId: EventID
}


const EventDetail: FC<EventDetailProps> = (props) => {
  const { eventId } = props

  const router = useRouter()
  const { pathname } = router


  const { data: event, error: eventError } = useRequest<Event>({
    url: `${API_ENDPOINTS.getEvent()}/${eventId}`,
  })


  if (eventError) {
    //  todo: show error notification, redirect to the search result view
    return null
  }

  // still loading
  if (!event) {
    return (
      <div className='center'>
        <Spin size="large"/>
      </div>
    )
  }


  return (
    <div>

      <EntityDetailHeader/>

      <EntityImage
        title={event.title}
        src={event.image_url}
      />

      <Title
        level={2}
        style={{
          marginBottom: 0,
        }}
      >
        {event.title}
      </Title>

      {/*todo: allow newline*/}
      <Text
        type="secondary"
      >
        {`${moment.unix(event.start).format('llll')}`} - {`${moment.unix(event.end).format('llll')}`}
      </Text>

      <Tag color={RootSlugEntity.EVENT} style={{ marginBottom: 12 }}>{RootSlugEntity.EVENT}</Tag>

      <Paragraph>{event.description}</Paragraph>

      <Divider>Contact</Divider>

      <EntityContact
        homepage={event.homepage}
        contact_name={event.organizer}
        email={event.email}
        telephone={event.telephone}
      />

      <EntityAddress
        city={event.city}
        country={event.country}
        state={event.state}
        street={event.street}
        zip={event.zip}
      />

      <EntityTags tags={event.tags}/>

      <EntityFooter
        entityId={event.id}
        type={RootSlugEntity.EVENT}
        title={event.title}
        activeLink={pathname}
        created_at={event.created_at}
      />


    </div>
  )
}

export default EventDetail