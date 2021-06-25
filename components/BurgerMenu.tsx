import { FC } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import useRequest from '../api/useRequest'
import { Button, Col, Dropdown, Menu as AntMenu, Row, Space, Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkPolicyToTargetAttributeMapper, LinkWithIcon } from '../dtos/LinkWithIcon'
import API_ENDPOINTS from '../api/endpoints'
import { getProjectNameFromQuery } from '../utils/slug'
import { changeLocale } from '../utils/locale'


const { Link } = Typography


const Menu: FC = () => {
  const router = useRouter()
  const { query, locales } = router
  const projectName = getProjectNameFromQuery(query)

  const { t } = useTranslation('map')


  const { data: linksWithIcon, error } = useRequest<LinkWithIcon[]>({
    url: API_ENDPOINTS.getBurgerMenuLinks(projectName),
  })

  if (error || !linksWithIcon) {
    console.error('failed to fetch burger menu links')

    return null
  }

  return (
    <AntMenu>
      {
        linksWithIcon.map(
          linkWithIcon => (
            <AntMenu.Item
              key={`burger-menu-item-${linkWithIcon.title}`}
            >
              <Row
                justify="space-between"
                gutter={32}
              >
                <Col>
                  <Link
                    href={linkWithIcon.link}
                    target={LinkPolicyToTargetAttributeMapper[linkWithIcon.policy]}
                    rel="noopener noreferrer"
                  >
                    {t(`burgerMenu.${linkWithIcon.title}`)}
                  </Link>
                </Col>

                <Col>
                  <FontAwesomeIcon icon={linkWithIcon.icon}/>
                </Col>
              </Row>
            </AntMenu.Item>
          ),
        )
      }

      {/*todo: we have a similiar component on the home, we could make it a component*/}
      <Space>
        {
          locales.map(locale => (
            <Button
              key={`locale-${locale}`}
              type="link"
              onClick={() => changeLocale(locale, router)}
            >
              {locale}
            </Button>
          ))
        }
      </Space>
    </AntMenu>
  )
}


const BurgerMenu: FC = () => {
  const router = useRouter()
  const { query } = router
  const projectName = getProjectNameFromQuery(query)

  return (
    <Dropdown
      overlay={<Menu/>}
      placement="bottomRight"
    >
      <Button
        block
        icon={
          <img
            alt="burger menu icon"
            src={`/projects/${projectName}/icons/burger-menu-icon.webp`}
            height="100%"
            width="auto"
          />
        }
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 3px 0.2px',
        }}
      />

    </Dropdown>
  )
}


export default BurgerMenu