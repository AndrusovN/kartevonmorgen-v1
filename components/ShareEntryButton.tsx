import React, { FC, useEffect, useState } from 'react'
import { Button, notification } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import useTranslation from 'next-translate/useTranslation'

interface ShareEntryButtonProps {
  showButton: boolean,
  openHandler: (value: boolean) => void
  embedHandler: () => void
  subscribeHandler: () => void
}

const ShareEntryButton: FC<ShareEntryButtonProps> = (props) => {

  const { t } = useTranslation('map')

  const [url, setUrl] = useState<string>('')

  const mainButtonHandler = () => {
    props.openHandler(!props.showButton)
  }

  const showNotification = () => {
    notification.open({
      message: 'Link copied to clipboard successfully!',
    })
  }

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <div id={'share-entry-button'}>
      <div className={'dropdown-container'}>
        <Button className={'dropdown-button'}
                style={{
                  width: `${props.showButton ? '100px' : '0px'}`,
                  height: `${props.showButton ? '40px' : '0px'}`,
                }}
                onClick={props.subscribeHandler}>
          <div className={'text-container'}>
            <span className={"small-text"}>{t('subscribe')}</span>
            <FontAwesomeIcon icon="envelope" color="black" />
          </div>
        </Button>
        <CopyToClipboard text={url}>
          <Button className={'dropdown-button'}
                  style={{
                    width: `${props.showButton ? '100px' : '0px'}`,
                    height: `${props.showButton ? '40px' : '0px'}`,
                    marginBottom: `${props.showButton ? '10px' : '0px'}`,
                    marginTop: `${props.showButton ? '10px' : '0px'}`,
                  }}
                  onClick={() => {
                    showNotification()
                  }}>
            <div className={'text-container'}>
              <span>{t('copy')}</span>
              <FontAwesomeIcon icon="link" color="black" />
            </div>
          </Button>
        </CopyToClipboard>
        <Button className={'dropdown-button'}
                style={{
                  width: `${props.showButton ? '100px' : '0px'}`,
                  height: `${props.showButton ? '40px' : '0px'}`,
                  marginBottom: `${props.showButton ? '10px' : '0px'}`,
                }}
                onClick={props.embedHandler}>
          <div className={'text-container'}>
            <span>{t('embed')}</span>
            <FontAwesomeIcon icon="code" color="black" />
          </div>
        </Button>
      </div>
      <Button className={'main-button'}
              onClick={() => mainButtonHandler()}>
        <FontAwesomeIcon icon="share" color="black" />
        <span style={{ marginLeft: '5px' }}>{t("share")}</span>
      </Button>
    </div>

  )
}

export default ShareEntryButton
