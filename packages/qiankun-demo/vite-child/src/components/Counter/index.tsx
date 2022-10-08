import { Button, Col, InputNumber, Row, Space } from 'antd'
import styles from './index.module.less'
import { useAppDispatch, useAppSelector } from '@/stores/storeHooks'
import { increment, decrement } from '@/stores/counterSlice'
import { useState } from 'react'

export default function Counter() {
  const [ step, setStep ] = useState(1)
  const value = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleChange = (val: number | null) => {
    if (val !== null) {
      setStep(val)
    }
  }

  return (
    <Space size={40} direction="vertical" className={styles.box}>
      <Row justify="center" align="middle" gutter={20}>
        <Col>
          <label>step:</label>
        </Col>
        <Col>
          <InputNumber value={step} onChange={handleChange}/>
        </Col>
      </Row>
      <Row justify="center" align="middle" gutter={20}>
        <Col>
          <Button type="primary" size="large" onClick={() => dispatch(increment(step))}>+</Button>
        </Col>
        <Col>
          <h1 className="number">{value}</h1>
        </Col>
        <Col>
          <Button type="primary" danger size="large" onClick={() => dispatch(decrement(step))}>-</Button>
        </Col>
      </Row>
    </Space>
  )
}
