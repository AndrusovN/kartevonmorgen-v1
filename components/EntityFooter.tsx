import React, { FC, Fragment } from 'react'
import { Col, Divider, Layout, Row, Tooltip, Typography } from 'antd'
import moment from 'moment'
import { RootSlugEntity } from '../utils/types'
import { mapEntityToOFDB } from '../api/endpoints'
import createMailToHref from '../utils/mailto'
import { gold } from '@ant-design/colors'
import useTranslation from 'next-translate/useTranslation'


const { Footer } = Layout
const { Link, Text } = Typography


interface EntityFooterProps {
  entityId: string
  type: RootSlugEntity.EVENT | RootSlugEntity.ENTRY
  title: string
  activeLink: string
  created_at: number
  version?: number
}


const EntityFooter: FC<EntityFooterProps> = (props) => {
  const {
    entityId,
    type,
    title,
    activeLink,
    created_at,
    version,
  } = props
  const { t } = useTranslation('map')
  return (
    <Footer
      style={{
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: -4,
        marginRight: -4,
        marginTop: 16,
        marginBottom: 60,
      }}
    >
      <Row
        justify='space-between'
      >
        <Col>
          <Link
            href={
              createMailToHref(
                process.env.NEXT_PUBLIC_KVM_REPORT_EMAIL,
                `Report for ${title}`,
                `This entry ${activeLink} is problematic because: `,
              )
            }
            style={{
              fontSize: '0.8em',
            }}
          >
            {t('entryDetails.reportLink')}
          </Link>
        </Col>

        <Col>
          <Text
            type='secondary'
            style={{
              fontSize: '0.8em',
            }}
          >
            {t('entryDetails.lastEdit')} {moment.unix(created_at).fromNow()}
          </Text>

          {
            version && (
              <Fragment>
                <Divider type='vertical' />
                <Text
                  type='secondary'
                  style={{
                    fontSize: '0.8em',
                  }}
                >
                  v{version}
                </Text>
              </Fragment>
            )
          }
        </Col>
      </Row>

      <Tooltip
        title={t('entryDetails.viewHistoryTooltip')}
        color={gold.primary}
      >
        <Link
          href={`${mapEntityToOFDB[type]()}/${entityId}`}
          style={{
            fontSize: '0.8em',
          }}
        >
          {t('entryDetails.viewHistory')}
        </Link>
      </Tooltip>
    </Footer>
  )
}


export default EntityFooter