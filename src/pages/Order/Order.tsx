import React from 'react'
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb'
import { BaseLayout } from '../../components/Layout/BaseLayout'
import { OrderList } from './OrderList'

export const Order = () => {
	return (
		<BaseLayout>
			<BreadCrumb title='Order' />
			<OrderList />
		</BaseLayout>
	)
}
