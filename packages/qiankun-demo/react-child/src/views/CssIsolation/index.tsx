import { Col, Row } from 'antd'
import styles from './index.module.less'

export default function CssIsolation() {
  return (
    <>
      <Row>
        <Col>
          <h2>react18子应用(CSS Module)</h2>
        </Col>
      </Row><Row>
        <Col span={12} className={styles.firstCol}>class="first-col"<br />background-color: purple;<br />font-size: 20px;</Col>
        <Col span={12} className={styles.secondCol}>class="second-col"<br />background-color: gray;<br />font-size: 20px;</Col>
      </Row>
    </>
  )
}
