import React from 'react'

import { Card, CardItem } from './Card'
import { Tab, TabItem } from '../../atoms'
import { Link } from '../../atoms'

export default {
  title: 'molecules/card',
  component: Card,
  argTypes: {},
}

const styles = {
  width: '100%',
  padding: '50px 0',
  background: '#737F8F10',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const ExpandableCardTemplate = args => (
  <Card {...args} tabIndex='0'>
    {Array.from({ length: 2 }).map(v => (
      <CardItem variant='detailItem' title='name' property='property' key={v} />
    ))}
  </Card>
)

export const ExpandableCard = ExpandableCardTemplate.bind({})
ExpandableCard.args = {
  variant: 'expandable',
  heading: 'Cards',
}

const CarouselCardTemplate = args => <Card {...args} tabIndex='0' />
export const CarouselCard = CarouselCardTemplate.bind({})
CarouselCard.args = {
  variant: 'carousel',
  title: 'V-neck Ruffle Top in Floral Sunset',
  subtitle: '921403392',
  imgUrl:
    'https://images.unsplash.com/photo-1603881568692-1429786f5ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  imgAltText: 'card-item-img',
}

const GeneralFullAccessCardTemplate = args => (
  <Card {...args} tabIndex='0'>
    <CardItem
      variant='generalItem'
      title='Item Name'
      subtitle='Directory Path/'
      imgUrl='https://images.unsplash.com/photo-1603881568692-1429786f5ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    />
    <CardItem
      variant='generalItem'
      title='Item Name'
      subtitle='Directory Path/'
    />
    <CardItem
      variant='generalItem'
      title='Item Name'
      subtitle='Directory Path/'
    />
  </Card>
)
export const GeneralFullAccessCard = GeneralFullAccessCardTemplate.bind({})
GeneralFullAccessCard.args = {
  variant: 'general',
  heading: 'Quick Items',
}

GeneralFullAccessCard.decorators = [
  Story => (
    <div style={styles}>
      <Story />
    </div>
  ),
]

const ActionCardItems = props => {
  return (
    <div {...props}>
      {Array.from({ length: 3 }).map(v => (
        <CardItem
          key={v}
          variant='generalItem'
          title={
            <span>
              Charlie Lee added
              <Link href='/' text=' 14 items ' />
              to The Fall Cords Line
            </span>
          }
          subtitle='Sept 7 2:38 PM PST'
          imgUrl='https://images.unsplash.com/photo-1603881568692-1429786f5ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          isActionItem={true}
          onClick={() => alert('you cliked action item')}
        />
      ))}
    </div>
  )
}

const WithActionItemsFullAccessCardTemplate = args => (
  <Card {...args} tabIndex='0'>
    <ActionCardItems />
  </Card>
)

export const WithActionItemsFullAccessCard = WithActionItemsFullAccessCardTemplate.bind(
  {},
)
WithActionItemsFullAccessCard.args = {
  variant: 'withActionItem',
  heading: 'Recent Activity',
}

const WithTabFullAccessCardTemplate = args => (
  <Card {...args} tabIndex='0'>
    <Tab
      variant='horizontal'
      navStyle={{ fontSize: '13px', lineHeight: '16px' }}
    >
      <TabItem title='Errors'>
        <div style={{ padding: '20px 0 0 0' }}>
          <ActionCardItems />
        </div>
      </TabItem>
      <TabItem title='Needs'></TabItem>
      <TabItem title='Pending'></TabItem>
    </Tab>
  </Card>
)

export const WithTabFullAccessCard = WithTabFullAccessCardTemplate.bind({})
WithTabFullAccessCard.args = {
  variant: 'withActionItem',
  heading: 'Recent Activity',
}
WithTabFullAccessCard.decorators = [
  Story => (
    <div style={styles}>
      <Story />
    </div>
  ),
]

const RootCategoryCardTemplate = args => (
  <Card {...args}>
    <CardItem variant='categoryItem' text='Subcategories' value='51' />
    <CardItem variant='categoryItem' text='Attributes' value='23' />
    <CardItem variant='categoryItem' text='Total SKUs' value='4,3924' />
  </Card>
)
export const RootCategoryCard = RootCategoryCardTemplate.bind({})
RootCategoryCard.args = {
  variant: 'rootCategory',
  title: 'Shirts',
  subtitle: 'Updated 9/8 12:15PM PST',
  tabIndex: '0',
}

const QuickAccessCardTemplate = args => <Card {...args} />
export const QuickAccessCard = QuickAccessCardTemplate.bind({})
QuickAccessCard.args = {
  variant: 'quickAccess',
  title: '23987532950 - The Fleet Fox',
  subtitle: 'Shirts/Flannel',
  imgUrl:
    'https://images.unsplash.com/photo-1603881568692-1429786f5ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  imgAltText: 'shirts',
  tabIndex: '0',
}

const HierarchyTreeCardTemplate = args => <Card {...args} />

export const HierarchyTreeCategoryCard = HierarchyTreeCardTemplate.bind({})
HierarchyTreeCategoryCard.args = {
  variant: 'hierarchytree',
  level: '1',
  title: 'Shirts',
  subtitle: '12 Subcategories',
  tabIndex: '0',
}
HierarchyTreeCategoryCard.decorators = [
  Story => (
    <div style={styles}>
      <Story />
    </div>
  ),
]

export const HierarchyTreeSubCategoryCard = HierarchyTreeCardTemplate.bind({})
HierarchyTreeSubCategoryCard.args = {
  variant: 'hierarchytree',
  level: '2',
  title: 'Shirts',
  subtitle: '12 Subcategories',
  tabIndex: '0',
}
HierarchyTreeSubCategoryCard.decorators = [
  Story => (
    <div style={styles}>
      <Story />
    </div>
  ),
]

const HierarchyTreeLinksCardTemplate = args => (
  <Card {...args}>
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {Array.from({ length: 4 }).map(v => (
        <Link key={v} text='Link' href='/' />
      ))}
    </div>
  </Card>
)

export const HierarchyTreeLinksCard = HierarchyTreeLinksCardTemplate.bind({})
HierarchyTreeLinksCard.args = {
  variant: 'hierarchytree',
  level: '3',
  title: 'Title',
  tabIndex: '0',
}
HierarchyTreeLinksCard.decorators = [
  Story => (
    <div style={styles}>
      <Story />
    </div>
  ),
]
