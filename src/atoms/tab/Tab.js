import React, { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import {
  StyledTabContainer,
  TabHeading,
  TabNavigation,
  StyledTabItem,
} from './Tab.styles'

export const Tab = memo(
  ({ variant, heading, children, navStyle, navClassName, ...props }) => {
    const [tabs, setTabs] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const elements = React.Children.toArray(children).filter(
      ele => typeof ele.type === 'function'
    )

    const Content = React.cloneElement(elements[activeIndex], { title: '' })

    const handleTabChange = index => {
      setActiveIndex(index)
    }

    useEffect(() => {
      const tabs = elements.map((ele, i) => ({
        id: i,
        title: ele.props.title,
        disabled: ele.props.disabled,
      }))
      setTabs(tabs)
    }, [])

    return (
      <StyledTabContainer variant={variant} {...props}>
        {heading && variant === 'horizontal' && (
          <TabHeading>{heading}</TabHeading>
        )}
        <TabNavigation variant={variant}>
          {tabs.length &&
            tabs.map((tab, i) => {
              return (
                <StyledTabItem
                  key={tab.title}
                  onClick={() => handleTabChange(i)}
                  active={activeIndex === i ? true : false}
                  variant={variant}
                  disabled={tab.disabled}
                  style={navStyle}
                  className={navClassName}
                >
                  {variant === 'vertical' ? (
                    <span>{tab.title}</span>
                  ) : (
                    tab.title
                  )}
                </StyledTabItem>
              )
            })}
        </TabNavigation>
        {Content}
      </StyledTabContainer>
    )
  }
)

export const TabItem = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

TabItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Tab.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  heading: PropTypes.string,
  disabled: PropTypes.bool,
  navStyle: PropTypes.object,
  navClassName: PropTypes.string,
}

Tab.defaultProps = {
  variant: 'horizontal',
  disabled: false,
}

export default Tab
